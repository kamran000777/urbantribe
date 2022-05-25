import React, { useEffect,useState } from 'react'
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../CartItem/CartItem'
import './Cart.css'
import cartImage from './cartEmpty.png'


//action
import { addToCart,removeFromCart } from '../../../Redux/Cart/CartAction';


function Cart() {
  const dispatch = useDispatch();
  const [cartItems,setCartItems] = useState([]);
  const navigate = useNavigate();

  const deleteFromCart=(id)=>{
    const newItems = cartItems.filter((prod) => {
      return prod.product !== id;
    });

    localStorage.setItem("cart", JSON.stringify(newItems));
    setCartItems(newItems);
    dispatch(removeFromCart(id));
  }

  const getCartCount=()=>{
    return cartItems.reduce((qty,item)=> Number(item.qty)+qty,0);
  }

  const getCartTotal=()=>{
    return cartItems.reduce((price,item)=> Number(item.price*item.qty)+price,0);
  }

  useEffect(() => {
    if (localStorage.getItem("cart") === null) {
      setCartItems([]);
    } else{
      setCartItems([JSON.parse(localStorage.getItem("cart"))][0]);
    }
  }, []);


  return (
    <div className='cartscreen'>
      <div className='cartscreen__left'>
        <h2>Shopping cart</h2>
        {cartItems.length === 0 ? (
          <div className='cart__empty'>
            <img src={cartImage} alt='cart_empty'/>
            <button onClick={()=>navigate("/")} className="cart__empty__btn">Continue Shopping</button>
          </div>
        ):(
          cartItems.map((item)=><CartItem key={item.product} item={item}  deleteFromCart={deleteFromCart}/>)
        )}
        
      </div>
      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p><span>Subtotal : </span>({getCartCount()}) items</p>
          <p><span>Amount total :</span>₹{getCartTotal().toFixed(2)}</p>
        </div>
        {cartItems.length > 0 && <div className='cartscreen__button'>
          <button onClick={()=>navigate("/checkout")}>Procced To Check Out</button>
        </div>}
      </div>
    </div>
  )
}

export default Cart