import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {AiOutlineStar} from 'react-icons/ai';
import "./Product.css";

function Product({imageUrl,name,price,latest,productId,discountedPrice}){
  const [timerDays, setTimerDays] = useState(10);
  const [timerHours, setTimerHours] = useState(2);
  const [timerMinutes, setTimerMinutes] = useState(32);
  const [timerSeconds, setTimerSeconds] = useState(15);

  let interval;

  const startTimer=()=>{
    const countDownDate = new Date("September 29,2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  
  return (
    <Link to={`/product/${productId}`} className="product__anchor">
      <div className="product">
        

      {latest && <div className="sale__timer">
        <span className="days">{timerDays>9?timerDays:"0"+timerDays} days</span>
        <span className="hour">{timerHours>9?timerHours:"0"+timerHours}</span>:
        <span className="minutes">{timerMinutes>9?timerMinutes:"0"+timerMinutes}</span>:
        <span className="second">{timerSeconds>9?timerSeconds:"0"+timerSeconds}</span>
    </div>}

      <div className="product__image">
      <img
          src={imageUrl}
          alt="product name" height="220" width="260"/>
      </div>
        
        <div className="product__info">
          <p className="info__name">{name}</p>
          <div className="product__price">
            <div>
              {latest && <span className="product__real__price">₹{price+discountedPrice}</span>}
              <span className="discount__price">₹{price}</span>
            </div>
            <div>
              <AiOutlineStar className="rating__icons"/>
              <AiOutlineStar className="rating__icons"/>
              <AiOutlineStar className="rating__icons"/>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
