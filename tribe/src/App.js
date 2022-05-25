import {Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux';


//screen
import About from './component/Screen/About/About';
import HomeLatest from './component/HomeScreen/HomeLatest';
import ProductScreen from './component/Screen/ProductScreen/ProductScreen';
import Login from './component/Screen/Login/Login';
import Cart from './component/Screen/Cart/Cart';
import FreeShip from './component/Footer/Free/FreeShip';
import SecurePay from './component/Footer/Secure/SecurePay';
import CashOnDel from './component/Footer/Cash/CashOnDel';
import Warranty from './component/Footer/warranty/Warranty';
import SignIn from './component/Screen/SignIn/SignIn';
import Checkout from './component/Screen/CheckOut/Checkout';
import Search from './component/Screen/Search/Search';

//component
import { Navbar } from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import ScrollToTop from './ScrollToTop';

//redux store
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <ScrollToTop/>
     <>
      <Navbar/>
     <main>
      <Routes>
        <Route path="/" element={<HomeLatest/>}></Route>
        <Route path="/product/:id" element={<ProductScreen/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="about" element={<About/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>
        <Route path="securePay" element={<SecurePay/>}></Route>
        <Route path="freeShip" element={<FreeShip/>}></Route>
        <Route path="warranty" element={<Warranty/>}></Route>
        <Route path="cashondel" element={<CashOnDel/>}></Route>
        <Route path="sign" element={<SignIn/>}></Route>
        <Route path="checkout" element={<Checkout/>}/>
      </Routes>
     </main>
     <Footer/>
    </>
    </Provider>
    
  );
}

export default App;

