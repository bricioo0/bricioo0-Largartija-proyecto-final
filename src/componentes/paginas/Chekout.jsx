import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Select, MenuItem, Typography } from '@mui/material';
import { emptyCart } from '../../redux/cartSlice'; // Asume que tienes esta acción para vaciar el carrito
import './estilos/compras.css';

function Checkout() {
  const cart = useSelector((state) => state.cart); // Obtener el carrito del store de Redux
  const [metodoPago, setMetodoPago] = useState('');
  const dispatch = useDispatch();

  
  const totalAmount = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

 
  const handleMetodoPagoChange = (e) => {
    setMetodoPago(e.target.value);
  };

 
  const handleConfirmarCompra = async () => {
    const data = {
      productos: cart.items,
      total: totalAmount,  
      metodoPago,
    };

    try {
     
      const response = await fetch('http://localhost:3001/api/compra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();

      if (result.success) {
        dispatch(emptyCart());
        window.location.href = result.paymentUrl; 
      } else {
        alert('Error al procesar la compra');
      }
    } catch (error) {
      console.error('Error en el proceso de compra:', error);
    }
  };

  return (
    <div className="container">
      <Typography variant="h4" className="title">Proceso de pago</Typography>

      
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
          </li>
        ))}
      </ul>

      <Typography variant="h6" className="total">Total: ${totalAmount}</Typography>

    
      <Typography variant="h6">Selecciona el método de pago</Typography>
      <Select value={metodoPago} onChange={handleMetodoPagoChange}>
        <MenuItem value="MercadoPago">MercadoPago</MenuItem>
        <MenuItem value="Debito">Tarjeta de Débito</MenuItem>
        <MenuItem value="Credito">Tarjeta de Crédito</MenuItem>
        <MenuItem value="CuentaDNI">Cuenta DNI</MenuItem>
      </Select>

      
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleConfirmarCompra} 
        disabled={!metodoPago} 
      >
        Confirmar compra
      </Button>
    </div>
  );
}

export default Checkout;

