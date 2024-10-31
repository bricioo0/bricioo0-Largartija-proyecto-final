import React from 'react';
import { Link } from 'react-router-dom';
import './estilos/gracias.css'; 

const Gracias = () => {
  return (
    <div className="gracias-container">
      <h1>¡Muchas gracias por tu compra!</h1>
      <p>Tu pedido ha sido confirmado. ¡Esperamos que disfrutes de tu compra en Largartija!</p>
      <Link to="/" className="btn-volver">Volver al inicio</Link>
    </div>
  );
}

export default Gracias;
