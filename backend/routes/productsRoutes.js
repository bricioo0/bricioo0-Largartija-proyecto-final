const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Acceso denegado, falta el token." });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Token no válido." });
  }
};


router.post("/store", verifyToken, async (req, res) => {
  const { name, price, category, stock, image } = req.body;
  try {
    const newProduct = new Product({ name, price, category, stock, image });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: "Error al crear el producto." });
  }
});

router.get("/store", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener los productos." });
  }
});

router.get("/store/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado." });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener el producto." });
  }
});

// Actualizar un producto por ID (protegido)
router.put("/store/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const { name, price, category, stock, image } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, category, stock, image },
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: "Producto no encontrado." });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar el producto." });
  }
});


router.delete("/store/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) return res.status(404).json({ message: "Producto no encontrado." });
    res.status(200).json({ message: "Producto eliminado." });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar el producto." });
  }
});


router.get("/search", async (req, res) => {
  const { name } = req.name;
  try {
    const products = await Product.find({
      $or: [
        { name: { $regex: name, $options: "i" } },
        { category: { $regex: name, $options: "i" } },
      ],
    });
    res.status(200).json(products);
  } catch (err) {
    console.error("Error en la búsqueda:", err);
    res.status(500).json({ message: "Error al buscar productos." });
  }
});

module.exports = router;


