import React, { useState } from 'react'; 
import { useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { Button, Select, MenuItem, Typography, Box } from '@mui/material';
import './estilos/compras.css';

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [metodoPago, setMetodoPago] = useState('');
  const [compraConfirmada, setCompraConfirmada] = useState(false);
  const navigate = useNavigate();


  const totalAmount = (cart.items || []).reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleMetodoPagoChange = (e) => {
    setMetodoPago(e.target.value);
  };

  const handleConfirmarCompra = async () => {
    const data = {
      productos: cart.items,
      total: totalAmount,  
      metodoPago,
    };
    navigate('/gracias');

    try {
      const response = await fetch('http://localhost:3001/api/compra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();

      if (result.success) {
        setCompraConfirmada(true);
      } else {
        alert('Error al procesar la compra');
      }
    } catch (error) {
      console.error('Error en el proceso de compra:', error);
    }
  };


    const renderCompraConfirmada = () => (
      <Box className="compra-confirmada">
        <Typography variant="h5" color="primary">Compra Confirmada</Typography>
        <Typography variant="body1">Gracias por tu compra. Puedes ver tu compra en el historial de pedidos o en tu perfil.</Typography>
        <Typography variant="body1">Total: ${totalAmount}</Typography> 
      </Box>
    );
  

  return (
    <div className="container">
      <Typography variant="h4" className="title">Proceso de pago</Typography>

      {cart.items && cart.items.length > 0 ? (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <Typography variant="h6">Tu carrito está vacío.</Typography>
      )}


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

      {compraConfirmada && renderCompraConfirmada()}
    </div>
  );
}

export default Checkout;
