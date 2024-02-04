import "./Navbar.css";
import React from 'react';
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import ekartlogo from "../../assets/ekWhiteLogo.png";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cartContext";



export const Navbar = () => {
  const {cartItems} = useContext(CartContext);
  const getCartItemsTotal= () => {
    let totalCartAmt = 0;
    for(const item in cartItems){
     if(cartItems[item] > 0){
       totalCartAmt = totalCartAmt + cartItems[item];
     }
    }
    return totalCartAmt;
 }

  return (
    <div className="Navbar">
    <div className="outer-box">
      <img src={ekartlogo} alt="ekart"/>
        <div className="inner-box">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart 
            <div className="cart-wrapper"> 
            <ShoppingCart size={30}></ShoppingCart>
            <div className="countofcart">{getCartItemsTotal()}</div>
            </div>
            </Link>
        </div>
    </div>
    </div>
  )
}
