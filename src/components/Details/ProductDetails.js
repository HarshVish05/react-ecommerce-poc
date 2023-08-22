import React, { useState } from "react";
import details from "../../details.json";
// import products from "../../products.json";
import "./prodDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";

const ProductDetails = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()
  const selectedProd = location.state?.prod;
  // const selectedCategory = location.state?.selectedCategory;
  // const [items,setItem] = useState(selectedProd)
  const {addToCart} = useCart();
  const goToCart = ()=> {
    addToCart(details[selectedProd],quantity)
    navigate("/cart",{state:{quantity}})
  }
  
  const deductFromCart = () => {
    if (quantity === 1) {
      alert("Your cart is empty");
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    
    <>
      <div className="details">
        <div className="image">
          <img src={details[selectedProd].image} alt="" srcset="" />
        </div>
        <div className="itemDetails">
          <h1>{details[selectedProd].name}</h1>
          <p>{details[selectedProd].description}</p>
          <h3>{details[selectedProd].price}</h3>
        </div>
      </div>
      <div className="quantity">
        <button type="submit" onClick={deductFromCart} className="button ">
          -
        </button>
        <p>quantity: {quantity}</p>
        <button type="submit" onClick={() => setQuantity(quantity + 1)} className="button ">
          +
        </button>
      </div>
      <div className="cart">
        <button type="submit" className="cartbutton" onClick={goToCart}>Add to cart</button>
      </div>
    </>
  );
};

export default ProductDetails;
