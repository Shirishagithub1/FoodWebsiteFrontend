import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Home from './Pages/Home/Home'
import Exploremenu from './components/Exploremenu/Exploremenu'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPop/LoginPop'
import Verify from './Pages/Verify/Veify'
import MyOrders from './Pages/MyOrders/MyOrders'

const App = () => {
  const  [showLogin ,setShowLogin] =useState(false)
  return (
    <>
    {showLogin?<LoginPopup  setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path ='/'  element ={<Home/>}/>
      <Route path ='/cart'  element ={<Cart/>}/>
      <Route path ='/order'  element ={<Placeorder/>}/>
      <Route path ='/verify'  element ={<Verify/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>  
        </div>
        <Footer/>
        </>
  )
}

export default App