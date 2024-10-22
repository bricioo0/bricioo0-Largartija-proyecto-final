const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productos: [
    {
      producto: { type: String, required: true },
      cantidad: { type: Number, required: true },
      precio: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  metodoPago: { type: String, required: true },
  estado: { type: String, default: 'Pendiente' },
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pedido', pedidoSchema);
