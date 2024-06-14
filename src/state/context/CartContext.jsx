import { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";
import Checkout from "../../pages/checkout";

const Context = createContext();

// GETTIN DATA BACK FROM LOCAL STORAGE

const getCartLocalStorageData = () => {

    let CartStorageData = localStorage.getItem("myCartData");

    if (!CartStorageData) {
        return [];
    }

    else {
        return JSON.parse(CartStorageData)
    }

}


// CONTEXT INITIAL STATE

let initialState = {
    cartData: getCartLocalStorageData(),
    checkoutData: getCartLocalStorageData(), 
    cartTotalItems: 0,
    cartTotalPrice: 0,
    cartDiscPrice: 0,
    promoAmount: 0,
    ShippingFee: 40,
    checkoutPrice: 0,
    chkDiscPrice: 0
}


// CART CONTEXT MAIN FUNCTION

const CartContext = ({children}) => {

const [state, dispatch] = useReducer(CartReducer, initialState)


// ADD TO CART FUNCTION CONTEXT

const addToCart = (productData) => {

dispatch({type: "ADD_TO_CART", payload: productData})

}


// CART INCREMENT & DECREMENT COUNTER 

const cartCounterIncUpdate = (productID, newQty) => {

dispatch({type: "UPDATE_CART_INCREMENT", payload: { productID, newQty }})

}

const cartCounterDecUpdate = (productID, newQty) => {

dispatch({type: "UPDATE_CART_DECREMENT", payload: { productID, newQty }})
    
}


// REMOVE ITEM FUNCTION CONTEXT

const removeItem = (poductId) => {

dispatch({type: "REMOVE_CART_ITEM", payload: poductId})
    
}



// PROCEED TO CHECKOUT

const proceedCheckout = () => {

dispatch({type: "PROCEED_TO_CHECKOUT"})   
    
}



// BUY NOW BUTTON FUNCTION CONTEXT 

const buyNow = (productData) => {

dispatch({type: "BUY_NOW", payload: productData})
    
}



// APPLY PROMOCODE

const applyPromo = (promoValue, errorMsgRef) => {

dispatch({type: "APPLY_PROMOCODE", payload: {promoValue, errorMsgRef}})

}




// STORING DATA IN LOCAL STORAGE

useEffect(() => {
    dispatch({type: "CART_TOTAL_ITEM"});
    dispatch({type: "CART_TOTAL_PRICE"});
    dispatch({type: "CHECKOUT_TOTAL_PRICE"});
    localStorage.setItem("myCartData", JSON.stringify(state.cartData));
}, [state.cartData, state.checkoutData])

return (
 <Context.Provider value={ { ...state, addToCart, removeItem, cartCounterIncUpdate, cartCounterDecUpdate, proceedCheckout, buyNow, applyPromo } }>
    {children}
</Context.Provider>
)

}


// GLOBAL CART useContext CUSTOM HOOK

const useCartContext = () => {
    return useContext(Context)
}

export { CartContext, useCartContext }
