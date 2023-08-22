import React, { useEffect, useLayoutEffect, useState } from "react";
import "./cart.css";
import { Item } from "./Item";
import products from '../../products.json'
import { useLocation } from "react-router-dom";
import { useCart } from "../../CartContext";




const Cart = () => {
    const location = useLocation();
    // const quantToAdd = location.state?.quantity
    // const [quantity,setQuantity] = useState(cart.quantity)
    const {cart,removeFromCart} = useCart();
  const [cartItem,setCartItem] = useState([])
  
  // console.log(quantToAdd);
  useEffect(()=>{
    setCartItem(Object.values(cart))
  },[cart])

  const handleremoveFromCart = (itemId) => {
    console.log("remove clicked");
    const updatedCart = cartItem.filter((item)=> item.id !== itemId);
    setCartItem(updatedCart)
    // console.log(updatedCart);
    removeFromCart(itemId)
  }

  
  return (
    <>
      <section>
        <h2>Shopping Cart</h2>
        <p>You have {cart.length} items in your shopping cart</p>
      </section>
      <Item addedItem= {Object.values(cartItem)} removeFromCart={handleremoveFromCart} />
     
    </>
  );
};

export default Cart;
