const CartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {

      const cartProduct = action.payload;

      const existingProduct = state.cartData.find((curElem) => curElem.singleProduct.id === cartProduct.singleProduct.id)

      if (existingProduct) {

        return {
          ...state,
          cartData: [ ...state.cartData ],
        }

      }

      else {

        return {
          ...state,
          cartData: [ cartProduct, ...state.cartData ]
        }

      }

    }



    if (action.type === "CART_TOTAL_PRICE") {

      let CartTotal = state.cartData.reduce((acc, curElem) => {
    
        return ((curElem.singleProduct.price * curElem.reqQty) + (500 * curElem.reqQty)) + acc;
    
     }, 0)

     let CartDiscTotal = state.cartData.reduce((acc, curElem) => {
    
      return (500 * curElem.reqQty) + acc;
  
     }, 0)

     return {
      ...state,
      cartTotalPrice: CartTotal,
      cartDiscPrice: CartDiscTotal 
     }
    
    };
    
    

    if (action.type === "CART_TOTAL_ITEM") {

      let CartItemTotal = state.cartData.reduce((acc, curElem) => {
  
        return curElem.reqQty + acc;
  
      }, 0);

      return {
        ...state,
        cartTotalItems: CartItemTotal,
       }
  
    }



    if (action.type === "PROCEED_TO_CHECKOUT") {

      return {
        ...state,
        checkoutData: [ ...state.cartData ]

      }

    }



    if (action.type === "BUY_NOW") {

      const cartProduct = action.payload;

      const existingProduct = state.cartData.find((curElem) => curElem.singleProduct.id === cartProduct.singleProduct.id)

      if (existingProduct) {

        return {
          ...state,
          cartData: [ ...state.cartData ],
          checkoutData: [ cartProduct ],
      } 

      }
      
      else {

      return {
        ...state,
        cartData: [ ...state.cartData, cartProduct ],
        checkoutData: [ cartProduct ],
      }

      }
    
    }

  

    if (action.type === "CHECKOUT_TOTAL_PRICE") {

      let CheckoutTotal = state.checkoutData.reduce((acc, curElem) => {
    
        return ((curElem.singleProduct.price * curElem.reqQty) + (500 * curElem.reqQty)) + acc;
    
     }, 0)


     let ChkDiscTotal = state.checkoutData.reduce((acc, curElem) => {
    
      return (500 * curElem.reqQty) + acc;
  
     }, 0)

     return {
      ...state,
      checkoutPrice: CheckoutTotal,
      chkDiscPrice: ChkDiscTotal 
     }
    
    };



    if (action.type === "UPDATE_CART_INCREMENT") {

        const { productID, newQty } = action.payload;

        let updatedCartQty = state.cartData.map((curElem) => {

         if (curElem.singleProduct.id === productID) {

          let newIncqty = newQty + 1;

          if (newIncqty < 1) {newIncqty = 1;}
          if (newIncqty > 5) {newIncqty = 5};

           return {
            ...curElem,
            reqQty: newIncqty
           }
           
          } 

          else { return curElem }

        })

        return {
          ...state,
          cartData: updatedCartQty
        }  

    }


    if (action.type === "UPDATE_CART_DECREMENT") {

      const { productID, newQty } = action.payload;

      let updatedCartQty = state.cartData.map((curElem) => {

       if (curElem.singleProduct.id === productID) {

        let newIncqty = newQty - 1;

        if (newIncqty < 1) {newIncqty = 1;}
        if (newIncqty > 5) {newIncqty = 5};

         return {
          ...curElem,
          reqQty: newIncqty
         }
         
        } 

        else { return curElem }

      })

      return {
        ...state,
        cartData: updatedCartQty
      }  

    }


    if (action.type === "REMOVE_CART_ITEM") {

        let productData = state.cartData.filter((curElem) => curElem.singleProduct.id !== action.payload)

        return {
          ...state,
          cartData: productData,
          checkoutData: productData
      }

    }



    if (action.type === "APPLY_PROMOCODE") {

      const {promoValue, errorMsgRef} = action.payload;

       if (promoValue === "flat500") {

        const myPanel = document.querySelector(".promoModal");
        const sidePanelModal = document.querySelector(".checkoutRow .sidePanelModal");

        errorMsgRef.style.display = "block";
        errorMsgRef.innerHTML = "Promocode Applied";

        document.body.style.overflow = "";
        myPanel.style.width = "0";
        sidePanelModal.classList.remove("myModalActive")
        sidePanelModal.style.display = "none"

        return {
          ...state,
          promoAmount: 500,
         }

       }

       if (promoValue === "") {

        errorMsgRef.style.display = "block";
        errorMsgRef.innerHTML = "Please Enter Promocode";
        return state;

       }

       else {

        errorMsgRef.style.display = "block";
        errorMsgRef.innerHTML = "Invalid Promocode";
        return state;
        
      }        

    }

  return state;
}

export default CartReducer;

