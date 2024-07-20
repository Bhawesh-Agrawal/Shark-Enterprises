import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Productdesc from './Components/Product-desc/Productdesc'
import Footer from './Components/Footer/Footer'
import Loginpopup from './Components/Loginpopup/Loginpopup'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Order from './pages/Order/Order'
import Categories from './Components/Categories/Categories'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile/Profile'

const App = () => {

  const [showLogin, setshowLogin] = useState(false)
  return (
    <>
    {showLogin?<Loginpopup setshowLogin={setshowLogin}/>:<></>}
      <div className='app'>
        <ToastContainer></ToastContainer>
        <Navbar setshowLogin={setshowLogin}></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route> 
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path='/product/:id' element={<Productdesc />}></Route>
          <Route path='/Checkout' element={<Checkout></Checkout>}></Route>
          <Route path='/Categories' element={<Categories></Categories>}></Route>
          <Route path='/Order' element={<Order></Order>}></Route>
          <Route path='/Profile' element={<Profile></Profile>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App