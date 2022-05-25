import React from 'react'
import Product from '../../Product/Product';
import Loading from '../../loader/Loading';
import './SmartScreen.css'

function SmartScreen({products,loading,error}) {
  return (
      <div className='smartwatch'>
      <h1 className='smartwatch__title'>Smart Life</h1>
      <div className='smartwatch__products'>
      {loading?<Loading/>:error?<h2>{error.message}</h2>:
                products.filter(product=>product.category==='watch').map(filteredProduct=>(<Product key={filteredProduct._id}
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

export default SmartScreen