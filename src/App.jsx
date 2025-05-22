import './index.css';
import {Route, Routes} from 'react-router-dom'
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import Nav from './source/Nav';
import Footer from './source/Footer';
import Search from './source/Search';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Nav/>
      <Search/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
      <Route path='/order' element={<Order/>}/>
    
    </Routes>
    <Footer/>
    </div>
  )
};

export default App;

