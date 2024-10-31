const express = require('express');
const router = express.Router();
const { Compra } = require('../models'); 

router.post('/api/compra', async (req, res) => {
  const { productos, total, metodoPago } = req.body;

  try {
   
    const nuevaCompra = await Compra.create({
      productos,
      total,
      metodoPago,
    });

    res.status(201).json({ success: true, compra: nuevaCompra });
  } catch (error) {
    console.error('Error al guardar la compra:', error);
    res.status(500).json({ success: false, message: 'Error al procesar la compra' });
  }
});

module.exports = router;
