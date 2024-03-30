import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { datas } from "../../assets/data";

function Cart() {
  const { cartItems, product_list, addToCart, removeFromCart, getTotalCartAmount, removeAll } = useContext(StoreContext);
  const navigate = useNavigate();
 

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {product_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
              <div className="cart-items-title cart-items-item" key={item._id}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p className="cart-item-mod">
                  <img onClick={() => removeFromCart(item._id)} className="add-remove" src={datas.minus} alt="" />
                  {cartItems[item._id]}
                  <img onClick={() => addToCart(item._id)} className="add-remove" src={datas.plus} alt="" />
                </p>
                <p>₹{item.price * cartItems[item._id]}</p>
                <p onClick={() => removeAll(item._id)} className="cross">x</p>
              </div>
              <hr />
              </>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <hr />
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Packaging Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 99}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}</p>
            </div>
          </div>
          <button className={getTotalCartAmount() === 0 ? "disable" : ""} onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          {/* <div>
            <p>If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='Enter Promo Code'/>
              <button>Apply</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
