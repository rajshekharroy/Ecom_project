import React from "react";
import "./Hamburger.css";
import { Link } from "react-router-dom";
import { datas } from "../../assets/data";
import { CSSTransition } from "react-transition-group";

function Hamburger({ showHam, setShowHam }) {
  return (
    <>

<CSSTransition
        in={showHam}
        timeout={500}
        classNames="navbar-container"
        unmountOnExit
        onExited={() => setShowHam(false)}
      >
     <div onClick={() => setShowHam(false)} className="hamburger-menu" >
      
       
          <div className="navbar-container">
            <img className="logo" src={datas.logo} alt="" />
            <img
              onClick={() => setShowHam(false)}
              className="cross"
              src={datas.cross}
              alt=""
            />
            <ul className="navbar-menu1">
              <Link
                onClick={() => setShowHam(false)}
                className="menu-options"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setShowHam(false)}
                className="menu-options"
                to="/mobile"
              >
                Mobiles
              </Link>
              <Link
                onClick={() => setShowHam(false)}
                className="menu-options"
                to="/smartwatch"
              >
                Smart Watches
              </Link>
              <Link
                onClick={() => setShowHam(false)}
                className="menu-options"
                to="/laptop"
              >
                Laptops
              </Link>
              <Link
                onClick={() => setShowHam(false)}
                className="menu-options"
                to="/camera"
              >
                Cameras
              </Link>
              <Link
                onClick={() => setShowHam(false)}
                className="menu-options"
                to="/contact"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
      </CSSTransition>
     
    </>
  );
}

export default Hamburger;
