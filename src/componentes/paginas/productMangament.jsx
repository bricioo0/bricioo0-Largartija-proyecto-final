import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3000/api/store';

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', stock: '', image: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setProducts(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async () => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });
    if (response.ok) {
      fetchProducts();
      setNewProduct({ name: '', price: '', category: '', stock: '', image: '' });
    }
  };

  const handleDeleteProduct = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      fetchProducts();
    }
  };

  const handleUpdateProduct = async (id) => {
    const updatedProduct = products.find(product => product._id === id);
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    });
    if (response.ok) {
      fetchProducts();
    }
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>

      <h2>Agregar Producto</h2>
      <input type="text" name="name" placeholder="Nombre" value={newProduct.name} onChange={handleInputChange} />
      <input type="number" name="price" placeholder="Precio" value={newProduct.price} onChange={handleInputChange} />
      <input type="text" name="category" placeholder="Categoría" value={newProduct.category} onChange={handleInputChange} />
      <input type="number" name="stock" placeholder="Stock" value={newProduct.stock} onChange={handleInputChange} />
      <input type="text" name="image" placeholder="Imagen URL" value={newProduct.image} onChange={handleInputChange} />
      <button onClick={handleAddProduct}>Agregar Producto</button>

      <h2>Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button onClick={() => handleDeleteProduct(product._id)}>Eliminar</button>
            <button onClick={() => handleUpdateProduct(product._id)}>Actualizar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductManagement;
