import React, { useEffect, useState } from "react";
import "./cart.css";
import { Item } from "./Item";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";




const Cart = () => {
    const location = useLocation();
    const cartItems = useSelector(state=> state.cart.cartItems)
    
  const [cartItem,setCartItem] = useState([])

  useEffect(()=>{
    setCartItem(cartItems)
  },[cartItems])


  return (
    <>
      <section>
        <h2>Shopping Cart</h2>
        <p>You have {cartItems.length} items in your shopping cart</p>
      </section>
      <Item  />
     
    </>
  );
};

export default Cart;
