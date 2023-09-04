import React, { useState } from "react";
import details from "../../details.json";
// import products from "../../products.json";
import "./prodDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";
import { useDispatch } from "react-redux";
import { addToCart,deductFromCart } from "../../redux/Action/action";
import { useEffect } from "react";
import axios from 'axios'

const ProductDetails = () => {
  const location = useLocation();

  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate()
  const selectedProd = location.state?.prod;
  const category = location.state?.selectedCategory;
  const isAdmin = localStorage.getItem('admin')==='true';
  useEffect(()=>{
    const data = axios.get(`http://localhost:5001/${category}`)
    .then((res)=>{
      setProduct(res.data)
    })
  },[product])
  const goToCart = ()=> {
    dispatch(addToCart(details[selectedProd],quantity))
    navigate("/cart",{state:{quantity}})
  }
  
  const deductQuantity = () => {
    if (quantity === 0) {
      alert("Your cart is empty");
    } else {
      setQuantity(quantity - 1);
    }
  };

  const editDetails = (productId)=>{
    navigate('/editDetails',{state:{category,productId}})
  }
  return (
    
    <>
    {product.map((value)=>{
      if(value.name===selectedProd){
       return(
        <>
        <div className="details">
        <div className="image">
          <img src={value.image} alt="" srcset="" />
        </div>
        <div className="itemDetails">
          <h1>{value.name}</h1>
          <p>{value.description}</p>
          <h3>{value.price}</h3>
        </div>
      </div>
      <div className="quantity">
        <button type="submit" onClick={deductQuantity} className="button ">
          -
        </button>
        <p>quantity: {quantity}</p>
        <button type="submit" onClick={() => setQuantity(quantity + 1)} className="button ">
          +
        </button>
      </div>
      <div className="cart">
        <button type="submit" className="cartbutton" onClick={goToCart}>Add to cart</button><br /><br />
      {isAdmin && (

      <button type="submit" className="cartbutton" onClick={()=>editDetails(value.id)}>Edit Details</button>
      )}
      </div>
      </>
       );
       
       
       }
      return null
    })}
      {/* <div className="details">
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
        <button type="submit" onClick={deductQuantity} className="button ">
          -
        </button>
        <p>quantity: {quantity}</p>
        <button type="submit" onClick={() => setQuantity(quantity + 1)} className="button ">
          +
        </button>
      </div>
      <div className="cart">
        <button type="submit" className="cartbutton" onClick={goToCart}>Add to cart</button>
      </div> */}
    </>
  );
};

export default ProductDetails;
