import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/auth/login', { email, password });

      if (response.data.error) {
        setError(response.data.error);
      } else {
         localStorage.setItem('token', response.data.token);
// Redirect to dashboard page after successful login
        // window.location.href = '/';
        navigate('/')
        console.log(response.data)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <h2 className='head'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p className="error">{error}</p>}
        
        <button className='log' type="submit">Login</button>
      </form>
      <p className='dont'>Don't have an account? <a className='si' href="/signup">Sign Up</a></p>
    </div>
  );
};

export default Login;