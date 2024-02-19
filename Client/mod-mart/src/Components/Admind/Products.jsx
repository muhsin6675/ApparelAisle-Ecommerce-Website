import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products.');
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      setError('Failed to delete product.');
    }
  };

  const handleUpdate = (id) => {
    navigate(`/products/update/${id}`);
  };

  const handleCreate = () => {
    navigate('/products/create');
  };

  return (
    <div className="p-d-flex p-jc-center p-ai-center p-py-5">
      <div className="product-list">
        <h2>Products</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className="btn" onClick={handleCreate}>
          Create Product
        </button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button className="btn" onClick={() => handleUpdate(product._id)}>
                    Update
                  </button>
                  <button className="btn" onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;