// src/componentes/Remeras.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function Remeras() {
  const products = useSelector((state) => state.products.products);  // Verificar si hay productos en el store
  const dispatch = useDispatch();

  // Si products es undefined, inicializarlo como un array vacío para evitar errores
  const remeras = products ? products.filter(product => product.category === 'remeras') : [];

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      <h1>Remeras</h1>
      <Grid container spacing={2}>
        {remeras.length > 0 ? (
          remeras.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`/img/${product.image}`} 
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span className='text-decoration-line-through'>
                      ${product.price}
                    </span> ${product.discount}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Agregar al carrito
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary">
            No hay productos en la categoría Remeras.
          </Typography>
        )}
      </Grid>
    </div>
  );
}

export default Remeras;
