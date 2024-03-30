import React from 'react'
import './Footer.css'
import { datas } from '../../assets/data'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer" id="footer">
    <div className="footer-content">
      <div className="footer-content-left">
        <img src={datas.logo_white} alt="" />
        <p>Enjoy tasty meals delivered to you from [Your Food Delivery Website Name]. Choose from a variety of yummy foods, order online easily, and get them delivered fast. Join us and taste the joy</p>
        <div className="footer-social-icons">
          <img src={datas.facebook_icon} alt="" />
          <img src={datas.twitter_icon} alt="" />
          <img src={datas.linkedin_icon} alt="" />
        </div>
      </div>
      <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/delivery'><li>Delivery</li></Link>
          <Link to='/privacy'><li>Privacy policy</li></Link>
        </ul>
      </div>
      <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+91 1234567890</li>
          <li>support@yantra.in</li>
          <li></li>
        </ul>
      </div>
    </div>
    <hr/>
    <p className="footer-copyright">Copyright 2024 © Yantra.in - All Right Reserved.</p>
  </div>
  )
}

export default Footer