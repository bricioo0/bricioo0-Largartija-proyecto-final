import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/cartSlice';
import { Button, Typography, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './estilos/compras.css'; // Asegúrate de importar el CSS

function Carrito() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Redirigir al proceso de pago
  };

  return (
    <div className="container">
      <Typography variant="h4" className="title">Tu carrito</Typography>
      {cart.items.length === 0 ? (
        <Typography variant="h6">El carrito está vacío</Typography>
      ) : (
        <>
          {cart.items.map((item) => (
            <div key={item.id} className="item">
              <div className="item-info">
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1">Talla: {item.talla}</Typography>
                <Typography variant="body1" className="item-price">Precio: ${item.price}</Typography>
              </div>
              <div className="item-actions">
                <Select
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                >
                  {[1, 2, 3, 4, 5].map((q) => (
                    <MenuItem key={q} value={q}>{q}</MenuItem>
                  ))}
                </Select>
                <Button onClick={() => handleRemove(item.id)}>Eliminar</Button>
              </div>
            </div>
          ))}
          <div className="checkout">
            <Button variant="contained" color="primary" onClick={handleCheckout}>
              Proceder al pago
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
