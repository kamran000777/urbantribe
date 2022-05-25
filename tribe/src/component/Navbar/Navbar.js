import { Link} from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgAppleWatch } from "react-icons/cg";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { searchItem } from "../../Redux/Search";
import "./Navbar.css";


const iconStyle = {
  paddingRight: "5px",
  fontSize: "1.5rem",
  color: "white",
};
const iconHome = {
  fontSize: "2rem",
};

export const Navbar = () => {
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [find,setFindItem] = useState("");
  const navigate = useNavigate();

  const clickHandler =() => {
    setFlag(!flag);
  };

  const changeHandler=(e)=>{
   setFindItem(e.target.value);
  }

  const searchClickHandler =()=>{
    dispatch(searchItem(find));
    navigate('/search');
    setFindItem("");
  }
  
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <CgAppleWatch style={iconHome}></CgAppleWatch>
          <span className="navbar__logo__title">urbanTribe</span>
        </Link>
      </div>
      <div className="search__bar">
        <input type="text" value={find} onChange={changeHandler} placeholder="Looking for something..." className="search__input"/><button type="submit" onClick={searchClickHandler} className="search__btn"><AiOutlineSearch/></button>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <AiOutlineShoppingCart style={iconStyle} />
            <span>
              Cart
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamberger__menu">
        <GiHamburgerMenu onClick={clickHandler} />
        {flag && (
          <div className="humburger">
            <BiArrowBack fontSize={27} onClick={clickHandler}/>
            <ul className="humburger__links">
            <li>
                <Link to="/" onClick={clickHandler}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={clickHandler}>About</Link>
              </li>
              <li>
                <Link to="/login" onClick={clickHandler}>Login</Link>
              </li>
              <li>
                <Link to="/cart" onClick={clickHandler}>Cart</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
