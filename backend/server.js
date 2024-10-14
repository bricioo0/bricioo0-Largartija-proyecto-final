const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());



mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log("Error conectando a MongoDB", err));


app.use("/api", authRoutes);

app.use("/api", productRoutes); // NUEVO


app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
