import React, { useState } from 'react';

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

const ProductManager = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');
  const token = localStorage.getItem('token'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price, category, stock, image };
    try {
      const response = await axios.post(`${API_URL}/store`, newProduct, {
        headers: { Authorization: `Bearer ${token}` } 
      });
      console.log('Producto creado:', response.data);
    } catch (error) {
      console.error('Error al crear el producto', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nombre del producto" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Precio" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Categoría" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Stock" 
        value={stock} 
        onChange={(e) => setStock(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="URL de la imagen" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
      />
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default ProductManager;
