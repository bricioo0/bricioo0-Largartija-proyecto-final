import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { Button, Typography, Select, MenuItem } from '@mui/material';
import { useHistory } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleCheckout = () => {
    history.push('/checkout'); // Redirigir al proceso de pago
  };

  return (
    <div>
      <Typography variant="h4">Tu carrito</Typography>
      {cart.items.length === 0 ? (
        <Typography variant="h6">El carrito está vacío</Typography>
      ) : (
        <>
          {cart.items.map((item) => (
            <div key={item.id}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body1">Talla: {item.talla}</Typography>
              <Typography variant="body1">Precio: ${item.price}</Typography>
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
          ))}
          <Button onClick={handleCheckout}>Proceder al pago</Button>
        </>
      )}
    </div>
  );
}

export default Cart;
