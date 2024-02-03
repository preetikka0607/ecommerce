import "./Home.css";
import {PRODUCTS} from "../../datas/products.js";
import React from 'react'
import { ProductWidget } from "../../components/ProductWidget/ProductWidget.jsx";

export const Home = () => {
  return (
    <div className="products-container-wrap">
    <div className="products-container">
        {PRODUCTS.map((item)=>(
          <ProductWidget prodid={item.id} prodname={item.productName} prodprice={item.productPrice} prodimg={item.productImage} proddesc={item.productDescription}/>
        ))}
    </div>
    </div>
  )
}
