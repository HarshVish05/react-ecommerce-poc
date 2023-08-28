import React, { useState } from "react";
import "./cart.css";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "../../CartContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, removeFromCart } from "../../redux/Action/action";


export const Item = () => {
  
  const cartItems = useSelector((state)=>state.cart.cartItems)

  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)
  // const calculateTotalAmount = (items) =>{
  //    return items.reduce((total,item)=>total + parseFloat(item.price) * item.quantity,0);
  //   }
    // const [totalAmount,setTotalAmount] = useState(calculateTotalAmount(addedItem))

    const handleremoveFromCart = (itemId) => {
      console.log("remove clicked");
      const updatedCart = cartItems.filter((item)=> item.id !== itemId);
      dispatch(removeFromCart(itemId))
    }

  const deductFromCart = () => {
    if (quantity === 0) {
      alert("Your cart is empty");
    } else {
      setQuantity(quantity - 1);
    //   setTotalAmount(totalAmount - parseFloat(addedItem[0].price))
    }
  };

  const addQuantity = () => {
    setQuantity(quantity+1)
    // setTotalAmount(totalAmount + parseFloat(addedItem[0].price))
  }

  const totalAmount =  cartItems.reduce((total,item)=>total + parseFloat(item.product.price) * item.quantity,0);
   
  const handlecheckout = () => {
    if(totalAmount>0){
      alert('Your order is placed')
      dispatch(deleteCart())
    }else{
      alert('Your cart is empty')
    }
  }
  
  
  return (
    <>
      <div className="cart-items-container">
        {cartItems.map((item) => (
          <div className="cart-items" key={item.product.id}>
            <div className="prod-image">
              <img
                src={item.product.image}
                alt=""
              />
            </div>
            <div className="prod-details">
              <h3>{item.product.name}</h3>
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
                onClick={addQuantity}
                className="button "
              >
                +
              </button>
            </div>
            <div className="prod-price">
              <p>{item.product.price}</p>
            </div>
            <div className="remove-item">
                <RxCross2 onClick={()=>handleremoveFromCart(item.product.id)} />
              
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h4>Total Amount : Rs {totalAmount}</h4>
        <button type="submit" className="button btn1" onClick={handlecheckout}>
          Checkout
        </button>
      </div>
    </>
  );
};
