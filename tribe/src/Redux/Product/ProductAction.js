import * as actionTypes from '../Product/ProductData';
import axios from 'axios';

//all products action creater
export const getProducts = () =>async(dispatch)=>{
      try{
           dispatch({type:actionTypes.GET_PRODUCTS_REQUEST})
           
           const {data} = await axios.get("/api/products");

            dispatch({
                  type:actionTypes.GET_PRODUCTS_SUCCESS,
                  payload:data
            })
      } catch(error){
            dispatch({
                  type:actionTypes.GET_PRODUCTS_FAIL,
                  payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            })
      }
      
}

//single Product details action creater
export const getProductDetails = (id) => async(dispatch)=>{
      try{
           dispatch({type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST})
           
           const {data} = await axios.get(`/api/products/${id}`);

            dispatch({
                  type:actionTypes.GET_PRODUCTS_DETAILS_SUCCESS,
                  payload:data
            })
      } catch(error){
            dispatch({
                  type:actionTypes.GET_PRODUCTS_DETAILS_FAIL,
                  payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            })
      }
      
}

export const removeProductDetails = ()=>(dispatch)=>{
      dispatch({
            type:actionTypes.GET_PRODUCTS_DETAILS_RESET
      })
}