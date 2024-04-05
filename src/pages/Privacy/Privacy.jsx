import React from "react";
import "./Privacy.css";

function Privacy() {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <ul>
        <h3>Information We Collect</h3>
        <li>
          When you visit our website or interact with us, we may collect
          personal information such as your name, email address, mailing
          address, phone number, and payment details. We may also collect
          information about your browsing activity, device information, and IP
          address.
        </li>
        <h3>How We Use Your Information</h3>
        <p>We use the information we collect for various purposes, including:</p>
           
        <li>Processing your orders and transactions</li>
        <li>Providing customer support and
        responding to inquiries</li>
        <li>Personalizing your experience and delivering
        tailored content</li>
        <li>Sending promotional offers, newsletters, and marketing
        communications Analyzing website performance and improving our products
        and services</li>
        <li> Complying with legal and regulatory requirements</li>
      </ul>
    </div>
  );
}

export default Privacy;
