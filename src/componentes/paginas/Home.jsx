import React from 'react';
import Footer from '../estructura/Footer';
import Nav from '../estructura/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import BannerGeneral from "../../img/banner-general.png";

function Home() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
        <Nav/>
      <img src={BannerGeneral} width={"100%"} height={"300"} alt="banner" />
      <h1>Ofertas</h1>
      <Grid container spacing={2}>
        {products.map((product) => (
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
                  <span className='text-decoration-line-through'>${product.price}</span> ${product.discount}
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
        ))}
      </Grid>
      <Footer/>
    </div>
  );
}

export default Home;
