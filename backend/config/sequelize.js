const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql', // O el dialecto que estés usando
});

module.exports = sequelize;
