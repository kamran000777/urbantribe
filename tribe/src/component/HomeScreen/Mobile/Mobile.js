import React from 'react'
import Product from '../../Product/Product'
import Loading from '../../loader/Loading';
import './Mobile.css'

function Mobile({products,loading,error}) {

  return (
    <>
    <div className='smartphone'>
          <h1 className='smartphone__title'>Smart Phones</h1>
          <div className='smartphone__products'>
          {loading?<Loading/>:error?<h2>{error.message}</h2>:
                products.filter(product=>product.category==='mobile').map(filteredProduct=>(<Product key={filteredProduct._id}
                 productId={filteredProduct._id}
                 name={filteredProduct.name}
                 price ={filteredProduct.price}
                 imageUrl = {filteredProduct.imageUrl}
                />))
                }
          </div>
    </div>
    </>
  )
}

export default Mobile