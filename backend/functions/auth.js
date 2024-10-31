const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Conexión a MongoDB (usando MongoDB Atlas, por ejemplo)
const uri = process.env.MONGO_URI;
let conn = null;

async function connectToDB() {
  if (conn == null) {
    conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB");
  }
  return conn;
}

const User = require("./models/User");

// Crear respuesta HTTP
const createResponse = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body),
});

// Handler para funciones de autenticación
exports.handler = async function (event) {
  await connectToDB();
  
  const { httpMethod, body } = event;
  const data = JSON.parse(body);

  if (httpMethod === "POST") {
    if (event.path.includes("registrarse")) {
      const { email, password } = data;

      // Verificar si el usuario ya existe
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return createResponse(400, { message: "El correo ya ha sido registrado." });
        }

        // Crear nuevo usuario
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        return createResponse(201, { message: "Usuario registrado con éxito." });
      } catch (err) {
        return createResponse(500, { message: "Error en el servidor." });
      }

    } else if (event.path.includes("acceso")) {
      const { email, password } = data;

      try {
        const user = await User.findOne({ email });
        if (!user) {
          return createResponse(400, { message: "Correo no registrado." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return createResponse(400, { message: "Contraseña incorrecta." });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return createResponse(200, { token });
      } catch (err) {
        return createResponse(500, { message: "Error en el servidor." });
      }

    } else if (event.path.includes("recuperar-contrasena")) {
      const { email } = data;

      try {
        const user = await User.findOne({ email });
        if (!user) {
          return createResponse(400, { message: "No se encontró una cuenta con ese correo electrónico." });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Configuración del transporter de nodemailer
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Enlace de recuperación de contraseña",
          text: `Usa este enlace para restablecer tu contraseña: http://localhost:3000/recuperar-contrasena/${token}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return createResponse(500, { message: "Error al enviar el correo electrónico." });
          }
          return createResponse(200, { message: "Correo enviado con éxito." });
        });

      } catch (err) {
        return createResponse(500, { message: "Error en el servidor." });
      }
    }
  }

  return createResponse(405, { message: "Método no permitido." });
};