import * as actionTypes from '../Product/ProductData';

//single product state
const productDetailState = {
      loading:false,
      products: [],
      error:""
}

//all products reducer
export const getProductsReducer = (state={products:[]}, action)=>{
      switch(action.type){
            case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
                  return{
                        loading: true,
                        products: [],
                        error:""
                  }
            case actionTypes.GET_PRODUCTS_SUCCESS:
                  return{
                        loading: false,
                        products: action.payload,
                        error:""
                  }
            case actionTypes.GET_PRODUCTS_FAIL:
                  return{
                        loading: false,
                         products: [],
                         error:action.payload
                        }
            default:
                  return state;
      }
}

//single product details reducer
export const getProductDetails = (state={product:{}}, action)=>{
      switch(action.type){
            case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
                  return{
                        loading: true
                  }
      
            case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
                  return{
                        loading: false,
                        product: action.payload
                  }
            
            
            case actionTypes.GET_PRODUCTS_DETAILS_FAIL:
                  return{
                        loading: false,
                         error:action.payload
                        }

            case actionTypes.GET_PRODUCTS_DETAILS_RESET:
                  return {
                        product:{}
                  }
            
            default:
                  return state;
      } 
}