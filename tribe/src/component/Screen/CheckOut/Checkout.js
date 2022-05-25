import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Checkout.css'


function Checkout() {
      const navigate = useNavigate();
  return (
    <div className='checkout__container'>
          <p>Your are our lucky customer, you got all the stuffs for free</p>
          <button onClick={()=>navigate("/")}>Continue Shopping</button>
    </div>
  )
}

export default Checkout