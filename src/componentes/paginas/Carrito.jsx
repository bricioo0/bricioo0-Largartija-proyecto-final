import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, Button } from '@mui/material';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Precio: $${item.discount}`} />
            <Button 
              variant="contained" 
              color="secondary"
              onClick={() => handleRemoveFromCart(item)}
            >
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Cart;