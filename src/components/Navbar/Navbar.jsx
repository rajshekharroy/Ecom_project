import React, { useContext, useEffect, useState } from "react";
import { datas } from "../../assets/data";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar({ setShowHam }) {
  // const [loginStatus, setLoginStatus] = useState("Sign In")
  const { user , loginWithRedirect , isAuthenticated , logout} = useAuth0();

  const { getTotalCartAmount, searchRes, handleSearch } =
    useContext(StoreContext);

  const handleChange = (evt) => {
    handleSearch(evt.target.value);
  };

  const ForHam = (evt)=>{
      evt.preventDefault();
      setShowHam(true);
  }

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={datas.logo} alt="" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link to="/">Home</Link>
          <Link to="/mobile">Mobiles</Link>
          <Link to="/smartwatch">Smart Watches</Link>
          <Link to="/laptop">Laptops</Link>
          <Link to="/camera">Cameras</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>

        <div className="navbar-right">
          <div className="navbar-cart">
            <Link to="/cart">
              <img src={datas.cart_icon} alt="" className="cart-icon" />
            </Link>
            <div className={getTotalCartAmount() ? "dot" : ""}></div>
          </div>


            {isAuthenticated && (<p>Hi, {user.name}</p>)}
   
          {
                isAuthenticated 
                ?( <img className="sign-out" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} src={datas.sign_out} alt="" />)
              
                : (<button onClick={() => loginWithRedirect()}>
                 Sign In
              </button>)
              }

              
<div  onClick={ForHam}>
          <img
            className="ham"
            src={datas.ham}
            alt=""
          />
          </div>
        </div>
      </div>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search for Mobile, Laptop, Smartwatch, Camera"
          value={searchRes}
          onChange={handleChange}
        />
        <img src={datas.search_icon} alt="" className="search-icon" />
      </div>
    </>
  );
}

export default Navbar;
