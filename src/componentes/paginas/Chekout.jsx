import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Select, MenuItem, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [metodoPago, setMetodoPago] = useState('');
  const history = useHistory();

  const handleMetodoPagoChange = (e) => {
    setMetodoPago(e.target.value);
  };

  const handleConfirmarCompra = async () => {
    const data = {
      productos: cart.items,
      total: cart.total,
      metodoPago
    };

    try {
      const response = await fetch('http://localhost:3001/api/compra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        window.location.href = result.paymentUrl; // Redirigir a la pasarela de pago
      } else {
        alert('Error al procesar la compra');
      }
    } catch (error) {
      console.error('Error en el proceso de compra:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Proceso de pago</Typography>
      <Typography variant="h6">Total: ${cart.total}</Typography>

      <Typography variant="h6">Selecciona el método de pago</Typography>
      <Select value={metodoPago} onChange={handleMetodoPagoChange}>
        <MenuItem value="MercadoPago">MercadoPago</MenuItem>
        <MenuItem value="Debito">Tarjeta de Débito</MenuItem>
        <MenuItem value="Credito">Tarjeta de Crédito</MenuItem>
        <MenuItem value="CuentaDNI">Cuenta DNI</MenuItem>
      </Select>

      <Button onClick={handleConfirmarCompra} disabled={!metodoPago}>
        Confirmar compra
      </Button>
    </div>
  );
}

export default Checkout;
