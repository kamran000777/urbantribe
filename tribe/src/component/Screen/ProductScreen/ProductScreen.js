import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams} from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ProductScreen.css";

//actions
import { getProductDetails } from "../../../Redux/Product/ProductAction";
import { addToCart } from "../../../Redux/Cart/CartAction";
import Loading from "../../loader/Loading";

function ProductScreen() {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();
  

  const productDetails = useSelector(state => state.getProductDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && params.id !== product._id) {
      dispatch(getProductDetails(params.id));
    }
  }, [dispatch, product,params.id]);

  const addToCartHandler = ()=>{
        dispatch(addToCart(product._id,qty));
        notify();
      }
  function notify(){
   toast.success("Item added to the Card!",{
     position:toast.POSITION.BOTTOM_RIGHT,
     autoClose : 2000
   });
  }

  return (
    <>
      <div className="productscreen">
        {loading ? (
          <Loading/>
        ) : error ? (
          <h2>{error.message}</h2>
        ) : (
          <div className="productscreen__left">
            <div className="left__image">
            <img
              src={product.imageUrl}
              alt="product name"
              className="left__image"
            /></div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>
                <span>Price :</span>
                ₹{product.price}
              </p>
              <p className="left__para">
                <span>Description :</span>{product.description}
              </p>
              <p>
                  Status :  {product.countInStock>0 ? " In Stock" : " Out of Stock"}
              </p>
              <p>
                <span>Quantity :</span>
                <select value={qty} onChange={(e)=> setQty(e.target.value)}>{
              [...Array(4).keys()].map((x)=>(
                    <option key={x+1} value={x+1}>{x+1}</option>
              ))
                }
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>Add to Cart</button>
              </p>
            </div>
          </div>
        )}
      </div>


      <ToastContainer position="bottom-right" autoClose={2500}/>
    </>
  );
}

export default ProductScreen;
