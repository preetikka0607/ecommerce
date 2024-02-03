import "./CartProduct.css";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cartContext";
import React from 'react'

export const CartProduct = ({prodid, prodname, prodprice, prodimg, proddesc}) => {
  const{removeFromCart} = useContext(CartContext);
  const{addToCart} = useContext(CartContext);
  const{cartItems} = useContext(CartContext);
  const{emptyCart} = useContext(CartContext);
  const{handlecnt} = useContext(CartContext);
 
  
  const cartItemAmt = cartItems[prodid];


  return (
    <div className="cartproduct-widget">
    <div className="cartimgcenter">
    <div className="cartprodImage-container">
        <img src={prodimg} alt="img"/>
    </div>
    </div>
    <div className="wrapper-details">
    <div className="cartprod-details">
        <p>{prodname}</p>
        <p>{proddesc}</p>
    </div>

    <div className="cartprod-add">
        <p>Qty: {cartItemAmt}</p>
        <div className="counterHandler">
        <button className="plusbutton" onClick={()=>{addToCart(prodid)}}>+</button>
        <input className="inputcounter" type="text" value={cartItemAmt} onChange={(event)=>{handlecnt(event.target.value, prodid)}}/>
        <button className="minusbutton" onClick={()=>{removeFromCart(prodid)}}>-</button>
        </div>
        
       
    </div> 
    <button className="remove-button" onClick={()=>{emptyCart(prodid)}}>Remove</button> 
    </div>

    <div className="PriceContainer">
        <p>Rs.{prodprice*cartItemAmt}</p>
    </div>
</div>
  )
}
