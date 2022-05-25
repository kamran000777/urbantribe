import React, { useEffect, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Carousel.css";
import firstImg from "./1.png";
import secondImg from "./2.jpg";
import thirdImg from "./5.jpg";
import fourthImg from "./6.webp";
import fiveImg from "./7.jpg";
import sixImg from "./8.png";
import saleImg from './sale.jpg';
import Img from "./Img";

function Carousel() {
  let nextHandler;
  let arr = [
    <Img src={saleImg} href="#"/>,
    <Img src={firstImg} href="https://www.mi.com/in/redmi-note-11t-5g/" />,
    <Img src={secondImg} href="https://in.event.mi.com/in/xiaomi12pro5gtheshowstopper" />,
    <Img src={thirdImg} href="https://event.realme.com/in/realme-buds-air-3" />,
    <Img src={fourthImg} href="https://hammeronline.in/products/hammer-bash-2-wireless-bluetooth-headphones" />,
    <Img src={fiveImg} href="http://riversongindia.com/motive.php" />,
    <Img src={sixImg} href="https://www.playstation.com/en-in/ps5/games/?emcid=pa-co-422254&gclid=CjwKCAjwxZqSBhAHEiwASr9n9MNd8EWdxoId2i7F8vSuCa2ByigekGEhIkwOnIorQSDT7ROd_Yk8aBoC8zcQAvD_BwE&gclsrc=aw.ds" />
  ];
  useEffect(()=>{
  const interval = setInterval(()=>{
     nextHandler();
  },2000)
  return ()=>{
    clearInterval(interval)
  }
  });

  const [xCordinate, setXCordinate] = useState(0);

   nextHandler = () => {
    xCordinate === -100 * (arr.length - 1)
      ? setXCordinate(0)
      : setXCordinate(xCordinate - 100);
  };
  const prevHandler = () => {
    xCordinate === 0
      ? setXCordinate(-100 * (arr.length - 1))
      : setXCordinate(xCordinate + 100);
  };

  return (
    <div className="slider">
      {arr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${xCordinate}%)` }}
          >
            {item}
          </div>
        );
      })}  
      <button className="btn" style={{left:"0px"}} onClick={prevHandler}>
      <GrPrevious />
    </button>
    <button className="btn" style={{right:"0px"}} onClick={nextHandler}>
    <GrNext />
    </button>
    </div>
  )
}

export default Carousel;
