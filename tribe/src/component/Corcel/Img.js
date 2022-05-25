import React from 'react'

function Img({src,href}) {
  return (
      <a href={href}   target="_blank">
      <img src={src}/></a>
     
  )
}

export default Img