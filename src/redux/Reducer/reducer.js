import { ADD_TO_CART,DELETE_CART,REMOVE_FROM_CART } from "../Action/action";
const initialState = {
    cartItems: []
}

const cartReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TO_CART :
            const newItem = {
               product: action.payload.product,
               quantity: action.payload.quantity
            };
            return {
                ...state,
                cartItems: [...state.cartItems,newItem]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) =>
                 item.product.id !== action.payload.productId
                )
            }
        case DELETE_CART:
            return {
                ...state ,
                cartItems:[]
            }
        default:
            return state

    }

}

export default cartReducer;