const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  try {
    const newSubscription = new Subscription({ email });
    await newSubscription.save();
    res.status(201).json({ message: 'Suscripción exitosa' });
  } catch (error) {
    res.status(400).json({ error: 'Error al suscribir: ' + error.message });
  }
});

module.exports = router;
