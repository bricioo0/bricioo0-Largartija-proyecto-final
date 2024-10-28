const express = require('express');
const router = express.Router();
const MercadoPago = require('mercadopago');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/authMiddleware'); 


MercadoPago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

router.post('/compra', verifyToken, async (req, res) => {
  const { productos, total, metodoPago } = req.body;

  if (!productos || productos.length === 0 || !metodoPago) {
    return res.status(400).json({ success: false, message: 'Datos incompletos' });
  }
  try {


    let paymentUrl = '';


    if (metodoPago === 'MercadoPago') {
      const preference = {
        items: productos.map((item) => ({
          title: item.name,
          unit_price: item.price,
          quantity: item.quantity,
        })),
        back_urls: {
          success: 'http://localhost:3000/success',
          failure: 'http://localhost:3000/failure',
          pending: 'http://localhost:3000/pending',
        },
        auto_return: 'approved',
      };
      const response = await MercadoPago.preferences.create(preference);
      paymentUrl = response.body.init_point; 
    }


    res.status(200).json({ success: true, paymentUrl });
  } catch (error) {
    console.error('Error en el proceso de pago:', error);
    res.status(500).json({ success: false, message: 'Error procesando la compra' });
  }
});

module.exports = router;

