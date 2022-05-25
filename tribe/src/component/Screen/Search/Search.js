import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../loader/Loading';
import Product from '../../Product/Product';

import {getProducts as listProducts} from '../../../Redux/Product/ProductAction';
import './Search.css'

function Search() {

  const dispatch= useDispatch();
  const searchItem = useSelector(state=>state.search);
    const {search} = searchItem;
  const getProducts=useSelector(state=>state.getProducts);
  const {products,loading,error} = getProducts;

  useEffect(()=>{
    dispatch(listProducts());
  },[dispatch]);


  return (
      <div className='search'>
      <h1 className='search__title'>Search {search}</h1>
      <div className='search__products'>
            {loading?<Loading/>:error?<h2>{error.message}</h2>:
           products.filter((product)=>{
              if(search===""){
                return product;
              }else if(product.name.toLowerCase().includes(search.toLowerCase())){
                return product;
              }else if(product.category.toLowerCase().includes(search.toLowerCase())){
                return product;
              }
            }).map(filteredProduct=>(<Product key={filteredProduct._id}
             productId={filteredProduct._id}
             name={filteredProduct.name}
             price ={filteredProduct.price}
             imageUrl = {filteredProduct.imageUrl}
            />))
            }
      </div>
</div>
  )
}

export default Search