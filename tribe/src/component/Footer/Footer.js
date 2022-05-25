import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineLocalShipping,
  MdOutlineScreenSearchDesktop,
} from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsCashCoin, BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <>
    <div className="container">
      <div className="footer__links">
        <ul>
          <li className="list">
            <Link to="freeShip">
              <MdOutlineLocalShipping className="terms__links" />
              <p>Free Shipping</p>
            </Link>
          </li>
          <li className="list">
            <Link to="securePay">
              <RiSecurePaymentLine className="terms__links" />
              <p>SecurePay</p>
            </Link>
          </li>
          <li className="list">
            <Link to="cashondel">
              <BsCashCoin className="terms__links" />
              <p>Cash On Delivery</p>
            </Link>
          </li>
          <li className="list">
            <Link to="warranty">
              <MdOutlineScreenSearchDesktop className="terms__links" />
              <p>Warranty</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="support__section">
        <div className="support sub__container">
          <p>Supports</p>
          <ul>
            <li>FAQ</li>
            <li>User Guidance</li>
            <li>Servies Centers</li>
            <li>urbanTribe Coins</li>
            <li>E-Wastage Management</li>
          </ul>
        </div>
        <div className="patners sub__container">
          <p>Our Proud Patners</p>
          <ul>
            <li>Realme</li>
            <li>Xiaomi</li>
            <li>Sony</li>
            <li>Hammer</li>
            <li>RiverSong</li>
          </ul>
        </div>
        <div className="contact__email">
          <div className="patners sub__container">
            <p>Contact us</p>
            <ul>
              <li className="email__list">
                <a >urbanTribe34@gmail.com</a>
              </li>
              <li className="email__list">
                <a >order.in@urbanTribe.com</a>
              </li>
              <li className="email__list">
                <a>services@urbanTribe.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact__details">
          <h1>1800-102-220</h1>
          <p>9:00-21:00, MON-SUN Including Holidays</p>
          <div className="social__media">
            <ul>
              <li>
                <a href="https://www.facebook.com/login/">
                  <BsFacebook className="icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/accounts/login/">
                  <AiFillInstagram className="icon" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=en">
                  <BsTwitter className="icon" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <AiFillYoutube className="icon" />
                </a>
              </li>
            </ul>
          </div>
           India( English/INR )
        </div>
      </div>
    </div>
    <p className="footer__copyright">
    © 2018-2022 urbanTribe. All Rights Reserved.
    </p>
    </>
  );
}

export default Footer;
