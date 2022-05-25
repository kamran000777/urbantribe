import { combineReducers } from "redux";
import { cartReducer } from "./Cart/CartReducer";
import { getProductDetails, getProductsReducer } from "./Product/ProductReducer";
import searchReducer from "./Search";

const rootReducer = combineReducers({
      cart : cartReducer,
      getProducts: getProductsReducer,
      getProductDetails : getProductDetails,
      search:searchReducer
})

export default rootReducer;