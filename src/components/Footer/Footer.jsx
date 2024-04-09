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
        <p>Connect with Us: Follow Our Social Media for Tech News & Community Updates! Need Assistance? Contact Our Support Team for Expert Help & Advice.</p>
        <div className="footer-social-icons">
          <img src={datas.facebook_icon} alt="" />
          <img src={datas.instagram_icon} alt="" />
          <img src={datas.twitter_icon} alt="" />
          <img src={datas.youtube_icon} alt="" />
        </div>
      </div>
      <div className="footer-content-center">
        <h2>Customer Service</h2>
        <ul>
          <Link to='/return'><li>Returns & Exchanges</li></Link>
          <Link to='/delivery'><li>Delivery</li></Link>
          <Link to='/privacy'><li>Privacy Policy</li></Link>
          <Link to='/terms'><li>Terms of Use</li></Link>
          <Link to='/about'><li>About Us</li></Link>
        </ul>
      </div>

      <div className="footer-content-center">
        <h2>Payment Options</h2>
        <ul className='payment-methods'>
          <li>Credit Card</li>
          <li>Debit Card</li>
          <li>UPI</li>
          <div className="methods">
          <img src={datas.rupay} alt="" />
          <img src={datas.upi} alt="" />
          <img src={datas.visa} alt="" />
          <img src={datas.mastercard} alt="" />
          </div>
        </ul>
      </div>
      <div className="footer-content-right">
        <h2>Contact</h2>
        <ul className='mobile-email'>
          <a href="tel:+918116966256"><li>+91 8116966256</li></a>
          <a href="mailto:raj.codehub@gmail.com"><li>raj.codehub@gmail.com</li></a>
        </ul>
      </div>
    </div>
    <hr/>
    <p className="footer-copyright">Copyright 2024 © Yantra.in - All Right Reserved.</p>
  </div>
  )
}

export default Footer