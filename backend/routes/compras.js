const express = require('express');
const router = express.Router();
const { Compra, Carrito } = require('../models'); // Ajusta esto según la estructura de tu proyecto

// Ruta para procesar la compra
router.post('/api/compra', async (req, res) => {
  const { productos, total, metodoPago } = req.body;
  
  try {
  
    const nuevaCompra = await Compra.create({ productos, total, metodoPago });

    // Si usas un carrito almacenado en la base de datos, vacía el carrito aquí
    // Ajusta esto según tu lógica de base de datos
    await Carrito.destroy({ where: { userId: req.user.id } }); // Asegúrate de tener la lógica de usuario implementada

    res.status(200).json({ success: true, paymentUrl: 'URL_DE_PAGINA_DE_PAGO' });
  } catch (error) {
    console.error('Error al procesar la compra:', error);
    res.status(500).json({ success: false, message: 'Error al procesar la compra' });
  }
});

module.exports = router;
