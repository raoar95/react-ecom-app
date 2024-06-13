const productReducer = (state, action) => {

  switch (action.type) {

    // GETTING PRODUCTS

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "PRO_API_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        proInitialState: action.payload,
      };

    case "CAT_API_DATA":
      return {
      ...state,
      isLoading: false,
      isError: false,
      catProducts: action.payload,
      catProInitialState: action.payload 
    };

    case "SINGLE_PRO_API_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        singleProduct: action.payload,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };



    // SORT PRODUCTS

    case "SORT_PRODUCTS":

      const mySortArr = [ ...state.catProInitialState ];

      if (action.payload === "PriceHighToLow") {

        let sortHightoLow = mySortArr.sort((a, b) => b.price - a.price);

        return {
          ...state,
          catProducts: sortHightoLow,
        };
      }

      if (action.payload === "PriceLowToHigh") {
        let sortLowtoHigh = mySortArr.sort((a, b) => a.price - b.price);

        return {
          ...state,
          catProducts: sortLowtoHigh,
        };
      }

      if (action.payload === "Discount") {
        const calculateDiscount = (product) => {
        const discountRate = ((product.price - (product.price + 500)) / product.price) * 100;
        return Math.ceil(discountRate);     
      };

        let sortDiscount = mySortArr.sort((a, b) => calculateDiscount(a) - calculateDiscount(b));

        return {
          ...state,
          catProducts: sortDiscount,
        };
      }

    case "CLEAR_SORT_PRODUCTS":
    case "CLEAR_FILTER_PRODUCTS":

      return {
        ...state,
        catProducts: state.catProInitialState,
      };


    
    // FILTER & UNFILTER PRODUCTS

    case "FILTER_PRODUCTS":

    let { ckbLabelValue, ckbValue } = action.payload;

    let myProFilterArr = [ ...state.catProInitialState ];

    const proFilterProduct = myProFilterArr.filter((curElem) => {

    if (ckbValue === "price") {

    if (ckbLabelValue === "Below ₹ 10,000") return curElem.price < 10000;
    if (ckbLabelValue === "₹ 10,000 - ₹ 19,999") return curElem.price >= 10000 && curElem.price < 20000;
    if (ckbLabelValue === "₹ 20,000 - ₹ 34,999") return curElem.price >= 20000 && curElem.price < 35000;
    if (ckbLabelValue === "₹ 35,000 - ₹ 49,999") return curElem.price >= 35000 && curElem.price < 50000;
    if (ckbLabelValue === "₹ 50,000 - ₹ 99,999") return curElem.price >= 50000 && curElem.price < 100000;
    if (ckbLabelValue === "Above ₹ 1,00,000") return curElem.price > 100000;

    }

    if (ckbValue === "brand") {

      const lowerCaseTitle = (curElem.title).toLowerCase();
      const lowerCaseText = ckbLabelValue.toLowerCase();
       
      return lowerCaseTitle.includes(lowerCaseText);
      
    }

    })
    

    // MERGE NEW FILTER PRODUCTS WITH THE EXISTING FILTERED PRODUCTS

    let allFilterProducts;

    if (state.prevProState.length > 0) {

      allFilterProducts = [ ...state.catProducts, ...proFilterProduct ];

    } 

    else {

      allFilterProducts = proFilterProduct;

    }

    return {
      ...state,
      catProducts: allFilterProducts,
      prevProState: allFilterProducts
    };



    // UNFILTER PRODUCTS ON UNCHECK CHECKBOX

    case "SET_PREV_PRODUCTS_FILTER_STATE":

    let prevFiltState = state.catProducts

    const prevFiltPro = prevFiltState.filter((curElem) => {

    const { ckbLabelValue, ckbValue } = action.payload;

    if (ckbValue === "price") {

      if (ckbLabelValue === "Below ₹ 10,000") return curElem.price >= 10000;
      if (ckbLabelValue === "₹ 10,000 - ₹ 19,999") return curElem.price < 10000 || curElem.price >= 20000;
      if (ckbLabelValue === "₹ 20,000 - ₹ 34,999") return curElem.price < 20000 || curElem.price >= 35000;
      if (ckbLabelValue === "₹ 35,000 - ₹ 49,999") return curElem.price < 35000 || curElem.price >= 50000;
      if (ckbLabelValue === "₹ 50,000 - ₹ 99,999") return curElem.price < 50000 || curElem.price >= 100000;
      if (ckbLabelValue === "Above ₹ 1,00,000") return curElem.price <= 100000;

    }
    

      if (ckbValue === "brand") {
  
        const lowerCaseTitle = (curElem.title).toLowerCase();
        const lowerCaseText = ckbLabelValue.toLowerCase();
         
        return !lowerCaseTitle.includes(lowerCaseText);
        
      }
  
    })

    if (prevFiltPro.length > 0 ) {

      return {
        ...state,
        catProducts: prevFiltPro
      };  

    }

    else {

      return {
        ...state,
        catProducts: state.catProInitialState,
        prevProState: []
      };  

    }


    // NAV PRODUCT SEARCH

    case "NAV_SEARCH":

    let allProducts = [ ...state.proInitialState ];

    if (action.payload === "") {

      const errorMsg = "Try Searching Query ..."

      return {
        ...state,
        searchQuery: [],
        queryErrorMSg: errorMsg  
      }

    }

    else {

      let searchProducts = allProducts.filter((curElem) => {

        let proTitle = curElem.title.toLowerCase()
        return proTitle.includes(action.payload)
  
      })

      if (searchProducts.length === 0 && action.payload !== "") {

        const errorMsg = "Sorry No Result for Search Query ..."
  
        return {
          ...state,
          searchQuery: [],
          queryErrorMSg: errorMsg 
        }
  
      }

    return {
      ...state,
      searchQuery: [ ...searchProducts ],
      queryErrorMSg: "" 
    }

    }
    

    default:
    return state;

  }

};

export default productReducer;
