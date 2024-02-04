// import React from "react";
// import { useState } from "react";
// import { PRODUCTS } from "../datas/products";
// import { createContext } from "react";

// export const CartContext = createContext(null);

// function getInitialCart(){
//     let cart = {};
//     for(let i=1; i<=PRODUCTS.length; i++){
//         cart[i] = 0;
//     }
//     return cart;
// }
// const CartContextProvider = (props) => {
//     const [cartItems,setCartItems] = useState(getInitialCart())

//     const addToCart = (itemNo) => {
//         setCartItems((prev)=>({...prev, [itemNo]: prev[itemNo]+1}));
//     }

//     const removeFromCart = (itemNo) => {
//         setCartItems((prev)=>({...prev, [itemNo]: prev[itemNo]-1}));
//     }
//     const groupContext = {cartItems, addToCart, removeFromCart}
//   return (
//   <CartContext.Provider value={groupContext}>
//     {props.children}
// </CartContext.Provider>
//   );
// };

// export default CartContextProvider;

import React, { createContext, useState } from "react";
import { PRODUCTS } from "../datas/products";

export const CartContext = createContext(null);

const getInitialCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getInitialCart());  
  
  const getSubtotal = () => {
    let totalAmt = 0;
    for(const item in cartItems) {
        if(cartItems[item] > 0){
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            console.log(itemInfo.productPrice);
            totalAmt += cartItems[item] * itemInfo.productPrice;
            console.log(totalAmt);
        }
    }
    return totalAmt;
  };

  const addToCart = (itemNo) => {
    setCartItems((prev) => ({ ...prev, [itemNo]: prev[itemNo] + 1 }));
  };

  const removeFromCart = (itemNo) => {
    setCartItems((prev) => ({ ...prev, [itemNo]: prev[itemNo] - 1 }));
  };

  const emptyCart = (itemNo) => {
    setCartItems((prev) => ({ ...prev, [itemNo]: prev[itemNo] - prev[itemNo] }));
  };
  
  const handlecnt = (value,itemNo) => {
    const inputval = value.length>0?parseInt(value):1;
    setCartItems((prev) => ({ ...prev, [itemNo]:inputval }));
  }

  const contextValue = { cartItems, addToCart, removeFromCart, emptyCart ,handlecnt, getSubtotal};

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};


