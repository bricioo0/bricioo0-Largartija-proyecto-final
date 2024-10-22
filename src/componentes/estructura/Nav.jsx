import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../../img/logo-lagartija.png";
import Carrito from "../../img/carrito-de-compras.png";
import "./estilo/nav.css";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

function Nav() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.products.searchQuery);
  const [products, setProducts] = useState([]);

  const handleSearch = async (e) => {
    const query = e.target.value;
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    if (query) {
      const response = await fetch(`${API_URL}/search?name=${query}`);
      const data = await response.json();
      setProducts(data);
    } else {
      setProducts([]);
    }
  };

  return (
    <header>
      <nav className='h-auto d-flex justify-content-between align-items-center text-light'>
        <img className='m-2' src={Logo} width="100px" alt="Lagartija - Logo" />
     
        <div className="d-flex flex-column w-50 m-2">
          <div className='mb-3'>
            <input 
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              value={searchQuery}
              onChange={handleSearch}
              aria-label="Search"
            />
          </div>
      
          <div>
            {products.length > 0 && (
              <ul className='list-unstyled'>
                {products.map((product) => (
                  <li key={product._id}>
                    <Link to={`/store/${product._id}`}>{product.name} - ${product.price}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
       
          <div>
            <ul className='d-flex list-unstyled flex-row gap-4 justify-content-center'>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/remeras">Remeras</Link></li>
              <li><Link to="/buzos">Buzos</Link></li>
              <li><Link to="/pantalones">Pantalones</Link></li>
              <li><Link to="/zapatillas">Zapas</Link></li>
            </ul>
          </div>
        </div>
 
        <div className='m-2'>
          <ul className='d-flex list-unstyled flex-row gap-2'>
            <li><Link to="/registrarse">Crear tu cuenta</Link></li>
            <li><Link to="/acceso">Ingresar</Link></li>
            <li><Link to="/carrito">Mis compras</Link></li>
            <li><img src={Carrito} width="25px" alt="carrito" /></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
