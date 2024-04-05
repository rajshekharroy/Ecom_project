import React, { useState } from "react";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { datas } from "../../assets/data";

function Contact() {
  return (
      <div className="contact-container">
        <div>
          <h1 className="contact-title">Contact Us</h1>
          <div className="faqs">
            <h2>FAQs</h2>
            <ul>
              <p>1. What payment methods do you accept?</p>
              <li>
                We accept various payment methods including credit/debit cards
                (Visa, MasterCard, American Express), PayPal, UPI, and bank
                transfers.
              </li>
              <p>2. How can I track my order?</p>
              <li>
                Once your order has been shipped, you will receive a
                confirmation email containing a tracking number and instructions
                on how to track your package.
              </li>
              <p>3. What is your return policy?</p>
              <li>
                We offer a hassle-free return policy within 7 days of delivery.
                Please visit our Returns & Exchanges page for more information
                on how to initiate a return.
              </li>
            </ul>
            <a href="#">View all FAQs</a>

            <div className="reach-out">
              <h3>
              If you need any assistance, please don't hesitate to contact us at support@yantra.in <br /> or reach out to our customer support team at +91 1234567890.
              </h3>
            
            </div>

            <div className="social-media">
            <img src={datas.facebook_icon} alt="" />
            <img src={datas.instagram_icon} alt="" />
            <img src={datas.twitter_icon} alt="" />
            <img src={datas.youtube_icon} alt="" />
          </div>
          </div>

          
        </div>
        <div className="contact-form">
          <h2>Write Us</h2>
          <form action="">
            <div className="name">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="text" placeholder="Mobile No" required />
            <input type="text" placeholder="Email Id" required />
            <textarea
              name=""
              placeholder="What can we help you with !"
              rows="5"
              required
            ></textarea>
            <div className="recaptcha">
              <ReCAPTCHA sitekey="6Le-xKspAAAAAHympCAVq-rehi4HUvrfNrTrRzfc" />
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
  );
}

export default Contact;
