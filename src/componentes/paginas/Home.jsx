import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Modal, Box } from '@mui/material';
import Footer from '../estructura/Footer';
import Nav from '../estructura/Nav';
import BannerGeneral from "../../img/banner-general.png";
import "./estilos/modal.css";  
import Logo from  '../../img/icons8-mercado-pago-48.png';
import Dni from  '../../img/Banco Provincia Cuenta DNI.png';
import Debito from  '../../img/pngwing.com.png';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../../redux/cartSlice'; // Asegúrate de importar la acción addToCart

function Home() {
  const products = useSelector(state => state.products.products);  
  const dispatch = useDispatch();

  const offerProducts = products.filter(product => product.discount < product.price);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');
  const [modalClass, setModalClass] = useState("");

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setCantidad(1);
    setTallaSeleccionada('');
    setModalClass("");
    setOpen(true);
  };

  const handleClose = () => {
    setModalClass("modal-exit");
    setTimeout(() => {
      setOpen(false);
      setSelectedProduct(null);
    }, 300);
  };

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const seleccionarTalla = (talla) => {
    setTallaSeleccionada(talla);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart({ ...selectedProduct, cantidad, talla: tallaSeleccionada }));
      handleClose(); // Cierra el modal después de agregar al carrito
    }
  };

  return (
    <div>
      <Nav />
      <img src={BannerGeneral} width={"100%"} height={"300"} alt="banner" />
      <h1>Ofertas</h1>
      <Grid container spacing={4} className="grid-container">
        {offerProducts && offerProducts.length > 0 ? (
          offerProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} className="grid-item">
              <Card className="product-card">
                <CardMedia
                  component="img"
                  height="300"
                  image={`/img/${product.image}`}
                  alt={product.name}
                  className="product-image"
                />
                <CardContent className="product-content">
                  <Typography gutterBottom variant="h5" component="div" className="product-name">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="product-price">
                    <span className='text-decoration-line-through'>
                      ${product.price}
                    </span> ${product.discount}
                  </Typography>
                  <Typography variant="body2" color={product.stock > 0 ? "green" : "red"} className="product-stock">
                    {product.stock > 0 ? `En stock: ${product.stock}` : "Sin stock"}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="buy-btn"
                    onClick={() => handleOpen(product)}
                    disabled={!product.stock}
                  >
                    Comprar
                  </Button>
                  <Button onClick={handleAddToCart} disabled={!product.stock}>
                    <div className="add-to-cart-icon">
                      <AddShoppingCartIcon style={{ fontSize: 20 }} />
                      <Typography variant="body2">Agregar al carrito</Typography>
                    </div>
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary">
            No hay productos en oferta.
          </Typography>
        )}
      </Grid>

      {selectedProduct && (
        <Modal open={open} onClose={handleClose}>
          <Box className={`modal-box ${modalClass}`}>
            <div className="modal-content">
              <img
                src={`/img/${selectedProduct.image}`}
                alt={selectedProduct.name}
                className="modal-image"
              />
              <div className="modal-details">
                <Typography variant="h4">{selectedProduct.name}</Typography>
                <Typography variant="h6" color="text.secondary">
                  ${selectedProduct.discount} <span className='text-decoration-line-through'>${selectedProduct.price}</span>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Métodos de pago
                </Typography>
                <div className="metodos-pago">
                  <img src={Logo} alt="Mercado Pago" />
                  <img src={Dni} alt="Cuenta DNI" />
                  <img src={Debito} alt="Débito" />
                </div>
                <div className="modal-options">
                  <Typography>Talles:</Typography>
                  {['S', 'M', 'L', 'XL'].map((talla) => (
                    <Button
                      key={talla}
                      variant="outlined"
                      className={`size-btn ${tallaSeleccionada === talla ? 'seleccionado' : ''}`}
                      onClick={() => seleccionarTalla(talla)}
                    >
                      {talla}
                    </Button>
                  ))}
                </div>
                <div className="modal-quantity">
                  <Typography>Cantidad:</Typography>
                  <Button onClick={decrementarCantidad}>-</Button>
                  <input type="text" value={cantidad} readOnly />
                  <Button onClick={incrementarCantidad}>+</Button>
                </div>
                <Button 
                  variant="contained" 
                  color="primary" 
                  className="buy-now-btn" 
                  onClick={handleAddToCart}
                >
                  Comprar ahora
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      )}
      <Footer />
    </div>
  );
}

export default Home;
