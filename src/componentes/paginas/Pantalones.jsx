/*   import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice'; // Asegúrate de tener esta acción
import { Grid, Card, CardContent, CardMedia, Typography, Button, Modal, Box } from '@mui/material';
import Nav from '../estructura/Nav';
import Footer from '../estructura/Footer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';


function Pantalones() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products) || [];
  const pantalones = products.filter(product => product.category === 'pantalones');

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setCantidad(1);
    setTallaSeleccionada('');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
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

  const agregarCarrito = () => {
    if (selectedProduct && tallaSeleccionada) {
      dispatch(addToCart({ ...selectedProduct, cantidad, talla: tallaSeleccionada }));
      handleClose(); // Cerrar el modal después de agregar al carrito
    }
  };

  return (
    <div className="pantalones-container">
      <Nav />
      <Typography variant="h3" component="h1" className="title">Nuestros Pantalones</Typography>
      <Grid container spacing={4} className="grid-container">
        {pantalones.length > 0 ? (
          pantalones.map((product) => (
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
                  <Typography gutterBottom variant="h5" component="div" className="product-name">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary" className="product-price">${product.price}</Typography>
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
                  <Button onClick={() => agregarCarrito(product)}>
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
          <Typography variant="h6" color="text.secondary" className="no-products">
            No hay productos en la categoría Pantalones.
          </Typography>
        )}
      </Grid>

      {selectedProduct && (
        <Modal open={open} onClose={handleClose}>
          <Box className="modal-box">
            <div className="modal-content">
              <img src={`/img/${selectedProduct.image}`} alt={selectedProduct.name} className="modal-image" />
              <div className="modal-details">
                <Typography variant="h4">{selectedProduct.name}</Typography>
                <Typography variant="h6" color="text.secondary">${selectedProduct.price}</Typography>
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
                <Button variant="contained" color="primary" className="buy-now-btn" onClick={agregarCarrito}>
                  <Link to="/carrito">
                  Agregar al carrito
                  </Link>
            
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

export default Pantalones; */



import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Modal, Box } from '@mui/material';
import "./estilos/pantalones.css";
import "./estilos/modal.css";
import Nav from '../estructura/Nav';
import Footer from '../estructura/Footer';
import Logo from  '../../img/icons8-mercado-pago-48.png';
import Dni from  '../../img/Banco Provincia Cuenta DNI.png';
import Debito from  '../../img/pngwing.com.png';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../../redux/cartSlice';

function Pantalones() {
  const products = useSelector((state) => state.products.products);
  const pantalones = products ? products.filter(product => product.category === 'pantalones') : [];
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setCantidad(1);  
    setTallaSeleccionada('');  
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
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

  const agregarCarrito = (product) => {
    dispatch(addToCart({ ...product, cantidad, talla: tallaSeleccionada }));
  };

  return (
    <div className="remeras-container">
      <Nav />
      <Typography variant="h3" component="h1" className="title">
        Nuestras Remeras
      </Typography>
      <Grid container spacing={4} className="grid-container">
        {pantalones.length > 0 ? (
          pantalones.map((product) => (
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
                    ${product.price}
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
                  <Button onClick={() => agregarCarrito(product)}>
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
          <Typography variant="h6" color="text.secondary" className="no-products">
            No hay productos en la categoría Remeras.
          </Typography>
        )}
      </Grid>

      {selectedProduct && (
        <Modal open={open} onClose={handleClose}>
          <Box className="modal-box">
            <div className="modal-content">
              <img
                src={`/img/${selectedProduct.image}`}
                alt={selectedProduct.name}
                className="modal-image"
              />
              <div className="modal-details">
                <Typography variant="h4">{selectedProduct.name}</Typography>
                <Typography variant="h6" color="text.secondary">
                  ${selectedProduct.price}
                </Typography>
                <Typography variant="h6" color="text.secondary">Métodos de pago</Typography>
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
                <Button variant="contained" color="primary" className="buy-now-btn">
                  <Link to="/chekout">Comprar ahora</Link>
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

export default Pantalones;
