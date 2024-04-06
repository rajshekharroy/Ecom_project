import React, { useContext, useEffect, useState } from 'react'
import './ScrollNavbar.css'
import { Link } from 'react-router-dom'
import { datas } from '../../assets/data'
import { StoreContext } from '../../context/StoreContext';
import { useAuth0 } from "@auth0/auth0-react";


function ScrollNavbar({setShowHam}) {
  const { user , loginWithRedirect , isAuthenticated , logout} = useAuth0();
    const [isScrolled, setIsScrolled] = useState(false);
    const {getTotalCartAmount,searchRes,handleSearch} = useContext(StoreContext)
    const handleChange = (evt)=>{
      handleSearch(evt.target.value)
    }
    useEffect(()=>{
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 150) { 
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
    <>
    <div className={`scroll-navbar ${isScrolled ? 'show' : 'hide'}`}>
      <div className='top-section'>
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
        <div className="scroll-navbar-cart">
          <Link to='/cart'><img src={datas.cart_icon} alt="" className='cart-icon' /></Link>
          <div className={getTotalCartAmount()?"dot":""}></div>
        </div>
        {isAuthenticated && (<p>Hi, {user.name}</p>)}
   
   {
         isAuthenticated 
         ?( <img className="sign-out" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} src={datas.sign_out} alt="" />)
       
         : (<button onClick={() => loginWithRedirect()}>
          Sign In
       </button>)
       }
        <img onClick={()=>setShowHam(true)} className='ham' src={datas.ham} alt="" />
      </div>
      </div>
      <div className="scroll-search-section">
        <input
          type="text"
          placeholder="Search for Mobile, Laptop, Smartwatch, Camera"
          value={searchRes}
          onChange={handleChange}
        />
         <img src={datas.search_icon} alt="" className="search-icon" />
      </div>
    </div>
    </>
  )
}

export default ScrollNavbar