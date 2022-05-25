import {ADD_TO_CART,
      DELETE_TO_CART} from './CartDataType';

import axios from 'axios';
export const addToCart=(id,qty)=>async(dispatch,getState)=>{
const {data} = await axios.get(`/api/products/${id}`)

dispatch({
      type:ADD_TO_CART,
      payload:{
            product:data._id,
            name:data.name,
            price:data.price,
            countInStock : data.countInStock,
            imageUrl:data.imageUrl,
            category:data.category,
            latest:data.latest,
            qty
      }
})

localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems));
}



export const removeFromCart = (id)=>(dispatch)=>{
dispatch({
type:DELETE_TO_CART,
payload:id
})
};