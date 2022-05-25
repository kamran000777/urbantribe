import React from 'react'
import Product from '../../Product/Product'
import Loading from '../../loader/Loading'
import './Headphone.css'

function Headphone({products,loading,error}) {
  return (
    <>
    <div className='headphone'>
          <h1 className='headphone__title'>Head Phones</h1>
          <div className='headphone__products'>
          {loading?<Loading/>:error?<h2>{error.message}</h2>:
                products.filter(product=>product.category==='headphone').map(filteredProduct=>(<Product key={filteredProduct._id}
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

export default Headphone