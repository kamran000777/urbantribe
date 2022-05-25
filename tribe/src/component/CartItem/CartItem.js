import React from "react";
import { Link } from "react-router-dom";
import {MdDelete} from 'react-icons/md'
import "./CartItem.css";

function CartItem({item, deleteFromCart}) {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src={item.imageUrl}
          alt={item.name}
        />
      </div>

      <Link to={`/product/${item.product}`} className="cartitem__name">
        <p>{item.name}</p>
      </Link>
      
      <p className="cartitem__price">₹{item.price}</p>
      <p className="cartitem__price">x{item.qty}</p>

      <button className="cartitem__button" onClick={()=>deleteFromCart(item.product)}>
            <MdDelete/>
      </button>
    </div>
  );
}

export default CartItem;
