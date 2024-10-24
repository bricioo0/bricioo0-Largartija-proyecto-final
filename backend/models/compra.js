const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Asegúrate de que esta ruta sea correcta

class Compra extends Model {}

Compra.init({
  productos: {
    type: DataTypes.JSON, // Asegúrate de que el formato se ajuste a tus necesidades
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  metodoPago: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Compra',
});

module.exports = Compra;

