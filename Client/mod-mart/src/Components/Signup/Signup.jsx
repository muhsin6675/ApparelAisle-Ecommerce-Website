
import React, { useState } from 'react';
import '../Signup/styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: val
    }));
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.username) {
      isValid = false;
      errors["username"] = "Username is required";
    }

    if (!formData.email) {
      isValid = false;
      errors["email"] = "Email is required";
    }

    if (!formData.password) {
      isValid = false;
      errors["password"] = "Password is required";
    }

    if (!formData.phoneNumber) {
      isValid = false;
      errors["phoneNumber"] = "Phone number is required";
    } else if (formData.phoneNumber.length !== 10) {
      isValid = false;
      errors["phoneNumber"] = "Phone number must be 10 digits";
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post("http://localhost:4000/auth/register", {
        "username": formData.username,
        "email": formData.email,
        "password": formData.password,
        "phone": formData.phoneNumber
      })
        .then((data) => {
          navigate('/userlogin')
          console.log(data.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up here</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            placeholder='Username'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-group">
          <input
            placeholder="Email Address"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-group">
          <input
            placeholder='Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-group">
          <input
            placeholder='Phone Number'
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            // required
          />
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;