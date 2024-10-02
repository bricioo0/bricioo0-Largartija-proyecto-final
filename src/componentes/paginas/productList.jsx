import React from 'react'
import { useSelector } from 'react-redux'
import {Card, Typography, Grid, CardContent, Button, Grid2} from "@mui/material"
import {useHistory} from "react-router-dom"

const productList = () => {
    const products = useSelector (state => state.products);
    const history = useHistory();


   const handleProductClick = (id) => {
    history.push ("/product/${id}")
   };


   return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body2">
                Precio: ${product.price} - Descuento: ${product.discount}
              </Typography>
              <Button onClick={() => handleProductClick(product.id)}>
                Ver detalles
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}



return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body2">
                Precio: ${product.price} - Descuento: ${product.discount}
              </Typography>
              <Button onClick={() => handleProductClick(product.id)}>
                Ver detalles
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

export default productList