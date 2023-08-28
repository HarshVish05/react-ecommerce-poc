export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DELETE_CART = "DELETE_CART";

export const addToCart = (product,quantity) => {
    return{
        type:ADD_TO_CART,
        payload:{
            product,
            quantity
    }
}
}

export const removeFromCart=productId=>{
    return{
        type:REMOVE_FROM_CART,
        payload:{
            productId    
    }
}
}
export const deleteCart=()=>{
    return{
        type:DELETE_CART
}
}