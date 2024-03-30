import React, { useContext, useEffect, useState } from 'react'
import { datas } from '../../assets/data'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


function Navbar() {

  const {getTotalCartAmount} = useContext(StoreContext)



  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={datas.logo} alt="" className='logo'/>
      </Link>
      <ul className="navbar-menu">
        <Link to='/'>Home</Link>
        <Link to='/mobile'>Mobiles</Link>
        <Link to='/smartwatch'>Smart Watches</Link>
        <Link to='/laptop'>Laptops</Link>
        <Link to='/camera'>Cameras</Link>
        <Link to='/contact'>Contact Us</Link>
      </ul>

      <div className="navbar-right">
        <img src={datas.search_icon} alt="" className='search-icon' />
        <div className="navbar-cart">
          <Link to='/cart'><img src={datas.cart_icon} alt="" className='cart-icon' /></Link>
          <div className={getTotalCartAmount()?"dot":""}></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar