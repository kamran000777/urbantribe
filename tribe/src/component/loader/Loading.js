import React from 'react'
import {ImSpinner} from 'react-icons/im';
import './Loading.css'


export default function Loading() {
  return (
    <div className='loading__container'>
          <ImSpinner className='loading__spinner'/>
    </div>
  )
}
