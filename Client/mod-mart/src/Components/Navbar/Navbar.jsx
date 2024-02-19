// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar/navstyles.css"
import { FaCartArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <img src=''/>
      <Link to="/about">About Us</Link>
      <br />
      <Link to="/contact">Contact Info</Link>
      <br />
      <Link to="/allproducts"> All Products</Link>
      <br />
      <Link to="/cart">
      <FaCartArrowDown /></Link>
      <br />
      <Link to="/signup"><button>Login/Sign Up</button></Link>
    </div>
  );
};

export default Home;