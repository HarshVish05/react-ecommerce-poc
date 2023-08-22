import React, { useState } from "react";
import "./cart.css";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "../../CartContext";

export const Item = ({ addedItem,removeFromCart }) => {
    // const {removeFromCart} = useCart()
    // console.log(quant);
  // const [quantity, setQuantity] = useState(addedItem.quantity)
  const calculateTotalAmount = (items) =>{
     return items.reduce((total,item)=>total + parseFloat(item.price) * item.quantity,0);
    }
    // const [totalAmount,setTotalAmount] = useState(calculateTotalAmount(addedItem))

  
  const deductFromCart = () => {
    if (quantity === 0) {
      alert("Your cart is empty");
    } else {
      setQuantity(quantity - 1);
    //   setTotalAmount(totalAmount - parseFloat(addedItem[0].price))
    }
  };

  const addToCart = () => {
    setQuantity(quantity+1)
    // setTotalAmount(totalAmount + parseFloat(addedItem[0].price))
  }

  const totalAmount =  addedItem.reduce((total,item)=>total + parseFloat(item.price) * item.quantity,0);
   
  
  
  
  return (
    <>
      <div className="cart-items-container">
        {addedItem.map((item) => (
          <div className="cart-items" key={item.id}>
            <div className="prod-image">
              <img
                src={item.image}
                alt=""
              />
            </div>
            <div className="prod-details">
              <h3>{item.name}</h3>
            </div>
            <div className="prod-quantity">
              <button
                type="submit"
                onClick={deductFromCart}
                className="button "
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                type="submit"
                // onClick={() => setQuantity(quantity + 1)}
                onClick={addToCart}
                className="button "
              >
                +
              </button>
            </div>
            <div className="prod-price">
              <p>{item.price}</p>
            </div>
            <div className="remove-item">
                <RxCross2 onClick={()=>removeFromCart(item.id)} />
              
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h4>Total Amount : Rs {totalAmount}</h4>
        <button type="submit" className="button btn1">
          Checkout
        </button>
      </div>
    </>
  );
};
