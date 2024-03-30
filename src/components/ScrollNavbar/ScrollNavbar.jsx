import React, { useContext, useEffect, useState } from 'react'
import './ScrollNavbar.css'
import { Link } from 'react-router-dom'
import { datas } from '../../assets/data'
import { StoreContext } from '../../context/StoreContext';

function ScrollNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const {getTotalCartAmount} = useContext(StoreContext)
    useEffect(()=>{
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 80) { // Change this value based on when you want the navbar to appear
                setIsScrolled(true);
              } else {
                setIsScrolled(false);
              }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])
  return (
    <div className={`scroll-navbar ${isScrolled ? 'show' : 'hide'}`}>
        <Link to='/'>
        <img src={datas.logo} alt="" className='logo'/>
      </Link>
      <ul className="scroll-navbar-menu">
        <Link to='/'>Home</Link>
        <Link to='/mobile'>Mobiles</Link>
        <Link to='/smartwatch'>Smart Watches</Link>
        <Link to='/laptop'>Laptops</Link>
        <Link to='/camera'>Cameras</Link>
        <Link to='/contact'>Contact Us</Link>
      </ul>

      <div className="scroll-navbar-right">
        <img src={datas.search_icon} alt="" className='search-icon' />
        <div className="scroll-navbar-cart">
          <Link to='/cart'><img src={datas.cart_icon} alt="" className='cart-icon' /></Link>
          <div className={getTotalCartAmount()?"dot":""}></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default ScrollNavbar