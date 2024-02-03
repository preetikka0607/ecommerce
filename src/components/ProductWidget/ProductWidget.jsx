import "./ProductWidget.css";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cartContext";
import { useNavigate } from 'react-router-dom';
import React from 'react'


export const ProductWidget = ({prodid, prodname, prodprice, prodimg, proddesc}) => {
  const navigate = useNavigate();
  const{addToCart} = useContext(CartContext);
  const{cartItems} = useContext(CartContext);
  const cartItemAmt = cartItems[prodid];
  const showcontent1 = 
  <>
   <button onClick={()=>{addToCart(prodid)}}>Add to Cart</button>
  </>

  const showcontent2 =
  <>
  <button onClick={()=>{navigate('/cart')}}>Go to Cart</button>
 </>
  return (
    <div className="product-widget">
        <div className="imgcenter">
        <div className="prodImage-container">
            <img src={prodimg} alt="img"/>
        </div>
        </div>
        <div className="prod-details">
            <p>{prodname}</p>
            <p>{proddesc}</p>
        </div>
    
        <div className="prod-add">
            <p>Rs. {prodprice}</p>
            {/* <button onClick={()=>{addToCart(prodid)}}> */}
              {/* Add to Cart {cartItemAmt > 0 && <>({cartItemAmt})</>} */}
              {cartItemAmt > 0?showcontent2:showcontent1}
              {/* </button> */}
        </div>  
      
    </div>
  )
}
