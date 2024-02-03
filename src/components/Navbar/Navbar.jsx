import "./Navbar.css";
import React from 'react';
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import ekartlogo from "../../assets/ekWhiteLogo.png";

export const Navbar = () => {
  return (
    <div className="Navbar">
    <div className="outer-box">
      <img src={ekartlogo} alt="ekart"/>
        <div className="inner-box">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart 
            <ShoppingCart size={30}></ShoppingCart>
            </Link>
        </div>
    </div>
    </div>
  )
}
