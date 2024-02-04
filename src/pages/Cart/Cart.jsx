import "./Cart.css";
import React, { useContext } from 'react';
import { PRODUCTS } from "../../datas/products";
import { CartContext } from "../../Contexts/cartContext";
import { CartProduct } from "./CartProduct";
import cartoonwoman from "../../assets/cartoon-woman.png";
import { useNavigate } from "react-router-dom";
import emptyCart from "../../assets/emptyCart.png";

export const Cart = () => {
  const {cartItems} = useContext(CartContext);
  const{getSubtotal} = useContext(CartContext);
  // const{emptyCart} = useContext(CartContext);
  const navigate = useNavigate();

  const totalCartAmount = getSubtotal();
  console.log({totalCartAmount});
  function Orderplaced(){
    alert("Your Order has been placed!!!");
   
  }

  const priceDetails = 
  <>
    <div className= "priceCartContainer">
      <div className="cartimgcontainer">
        <img src={cartoonwoman} alt="girlimage"/>
      </div>
      <div>
         <h1>Total Amount</h1>
         <h3>Rs.{totalCartAmount}</h3>
         <div className="Cartbutton-wrapper">
         <button onClick={()=>{navigate('/')}}>Continue Shopping</button>
         <button onClick={()=> {Orderplaced()}}>Place Order</button>
         </div>
      </div>
    </div>
  </>
 const emptyCartContent = 
 <>
  <div className="EmptyCartContainer">
        <img src={emptyCart} alt="emptyCart"/>
        <h1>Your Cart is Empty!!!</h1>
        <p>Looks like you have nothing added to your cart. Go</p>
        <p>ahead and explore new items.</p>
        <button onClick={()=>{navigate('/')}}>Add items...</button>
    </div>
 </>
  return (
    <div>
      
      <div className="CartProducts-container">
         {PRODUCTS.map((item)=> {
          if(cartItems[item.id]!== 0) {
              // <p>{item.productName}</p>
              // return <p>{item.productName}Items added is:{cartItems[item.id]}</p>;
              return <CartProduct prodid={item.id} prodname={item.productName} prodprice={item.productPrice} proddesc={item.productDescription} prodimg={item.productImage}/>;
          }
          return null;
         })}
         <div>

          {totalCartAmount > 0?priceDetails:emptyCartContent}
          {/* <p>Your Total Amount is: {totalCartAmount}</p> */}
         </div>
      </div>
    </div>
  );
};
