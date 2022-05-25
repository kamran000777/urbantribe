import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//component
import Carousel from '../Corcel/Corcel'
import Product from '../Product/Product'
import './HomeLatest.css'
import Mobile from './Mobile/Mobile'
import Gaming from './Gaming/Gaming'
import Headphone from './Headphones/Headphone'
import SmartScreen from './SmartWatch/SmartScreen'
import Loading from '../loader/Loading';

import {getProducts as listProducts} from '../../Redux/Product/ProductAction';


function HomeLatest() {
  
  let discountedPrice = Math.floor(Math.random()*(1000-500+1)+500);
  const dispatch= useDispatch();

  const getProducts=useSelector(state=>state.getProducts);
  const {products,loading,error} = getProducts;

  useEffect(()=>{
    dispatch(listProducts());
  },[dispatch]);
  
  return (
    <>
    <Carousel/>
    <div className='homescreen'>
          <h1 className='homescreen__title'>Gone in Flash</h1>
          <div className='homescreen__products'>
                {loading?<Loading/>:error?<h2>{error.message}</h2>:
                products.filter(product=>product.latest===true).map(filteredProduct=>(<Product key={filteredProduct._id}
                 productId={filteredProduct._id}
                 name={filteredProduct.name}
                 price ={filteredProduct.price}
                 imageUrl = {filteredProduct.imageUrl}
                 latest={filteredProduct.latest}
                 discountedPrice={discountedPrice}
                />))
                }
          </div>
    </div>
<Mobile products={products} loading={loading} error={error}/>
<SmartScreen products={products} loading={loading} error={error}/>
<Gaming products={products} loading={loading} error={error}/>
<Headphone products={products} loading={loading} error={error}/>
  </>
    
  )
}

export default HomeLatest