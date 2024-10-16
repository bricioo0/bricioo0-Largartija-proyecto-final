import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, Button, Paper, Typography } from '@mui/material';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <Paper style={{ padding: '20px', margin: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center">Carrito de Compras</Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id} style={{ borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
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
      {cart.length === 0 && (
        <Typography variant="body1" align="center">Tu carrito está vacío</Typography>
      )}
    </Paper>
  );
}

export default Cart;
