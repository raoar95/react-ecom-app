import React, { useEffect, useReducer, createContext, useContext } from 'react'
import productReducer from '../reducer/ProductReducer';
import localProductsData from '../../assets/Local Products/localProduct';
import { useNavigate } from 'react-router-dom';

const Context = createContext();

const productApiUrl = 'https://fakestoreapi.com/products'; 

const initialState = {
  isLoading: false,                           // LOADING WHILE FETCHING DATA
  isError: false,                             // ERROR FETCHING DATA
  products: [],                               // ALL PRODUCTS DATA 
  proInitialState: [],                        // GETTING PRODUCT INITIAL ALL PRODUCT STATE FOR FUTURE USE    
  catProducts: [],                            // CATEGORY PRODUCTS DATA
  catProInitialState: [],                     // GETTING PRODUCT INITIAL CATEGORY PRODUCT STATE FOR FUTURE USE 
  singleProduct: {},                          // SINGLE PRODUCT DETAIL DATA 
  prevProState: [],                           // CAPTURING PREV STATE FOR FILTER
  searchQuery: [],                            // GETTING SEARCH RESULT
  queryErrorMSg: "Try Searching Query ...",   // SETTING ERROR MSG FOR SEARCH
  inputValidateErrorMsg: ""                   // INPUT VALIDATION ERROR MSG
}

const AppContext = ({ children }) => {

const [state, dispatch] = useReducer(productReducer, initialState)

const getProductData = async (ProductsUrl) => {

dispatch( {type: "SET_LOADING"} )

try {

    const proApiResponse= await fetch(ProductsUrl);
  
    const apiProductsData = await proApiResponse.json();

    const localProData = localProductsData; 

    const combineProductsData = [ ...apiProductsData, ...localProData ]
  
    dispatch({type: "PRO_API_DATA", payload: combineProductsData})

} 

catch (error) {

    dispatch({type: "API_ERROR"})
  
}

}


const getProductCategory = async (catProductsUrl, ProductCategory) => {

  dispatch( {type: "SET_LOADING"} )
  
  try {
  
      const proApiResponse= await fetch(catProductsUrl);
    
      const apiCatProductsData = await proApiResponse.json();

      const localProCatData = localProductsData.filter((products) =>  products.category === ProductCategory);     
  
      const combineProcatsData = [ ...apiCatProductsData, ...localProCatData ]
    
      dispatch({type: "CAT_API_DATA", payload: combineProcatsData})
  
  } 
  
  catch (error) {

      console.error('Fetching products failed:', error);
  
      dispatch({type: "API_ERROR"})
    
  }
  
  }



const getSingleProductData = async (SingleProductUrl, productId) => {
  
try {

    // Checking if the productId falls within the range of local product IDs

    if (productId > 20) { 

      // Set loading state when fetching local product

      dispatch({ type: "SET_LOADING" }); 

      // find Local Product match Product Id

      const singleLocalProductData = localProductsData.find(product => product.id == productId);
      
      dispatch({ type: "SINGLE_PRO_API_DATA", payload: singleLocalProductData });

    } 
    
    else {

      const sinProApiResp = await fetch(SingleProductUrl);

      const singleApiProductData = await sinProApiResp.json();

      // Set loading state before API call

      dispatch({ type: "SET_LOADING" });

      dispatch({ type: "SINGLE_PRO_API_DATA", payload: singleApiProductData });
    }

} 
  
  
catch (error) {

// Dispatch action to handle API error

dispatch({ type: "API_ERROR" }); 

}

};



// SORTING FUNCTION CONTEXT

const proSorting = (sortTypeValue) => {

dispatch({ type: "SORT_PRODUCTS", payload: sortTypeValue })
  
}

const clearSortProduct = () => {

dispatch({ type: "CLEAR_SORT_PRODUCTS" })

}



// FILTER PRODUCT FUNCTION CONTEXT

const proFilter = (ckbLabelValue, ckbValue) => {

  dispatch({ type: "FILTER_PRODUCTS", payload: { ckbLabelValue, ckbValue } })

}


const setPrevPro = (ckbLabelValue, ckbValue) => {

dispatch({ type: "SET_PREV_PRODUCTS_FILTER_STATE",  payload: { ckbLabelValue, ckbValue } })

}




// NAV SEARCH FUNCTION CONTEXT

const getSearchQuery = (event) => {

  dispatch({type: "NAV_SEARCH", payload: event.target.value })

};



// NAVIGATE TO PRODUCT / CATEGORY PAGE

const navigate = useNavigate();

const GoToPage = (idorCat) => {
  navigate(`/product/${idorCat}`);
};





useEffect(() => {

getProductData(productApiUrl);

}, [])


return (

    <Context.Provider value={ { ...state,  getProductData, getProductCategory, getSingleProductData, proSorting, clearSortProduct, proFilter, setPrevPro, getSearchQuery, GoToPage } }>
        {children}
    </Context.Provider>

  )
}



// GLOBAL PRODUCT useContext CUSTOM HOOK

const useProductContext = () => {
  return useContext(Context)
}


export { AppContext, useProductContext }