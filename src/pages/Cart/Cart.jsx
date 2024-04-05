import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { datas } from "../../assets/data";

function Cart() {
  const {
    cartItems,
    product_list,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    removeAll,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    // <div className="cart">
    <>
      <div
        className={
          product_list.some((item) => cartItems[item._id] > 0)
            ? "hidden"
            : "empty-cart-message"
        }
      >
        {product_list.some((item) => cartItems[item._id] > 0) ? (
          <></>
        ) : (
          <h1>Your cart is empty</h1>
        )}
      </div>
      <div
        className={
          product_list.some((item) => cartItems[item._id] > 0)
            ? "cart"
            : "hidden"
        }
      >
        <div className="cart-items">
          <h2>Your Shopping Cart</h2>
          <div className="cart-items-title">
            <p className="item">Item</p>
            {/* <p>Title</p> */}
            <p className="quantity">Quantity</p>
            <p className="price">Price</p>
            {/* <p className="total">Total</p> */}
            {/* <p>Remove</p> */}
          </div>
          <br />
          <hr />

          {product_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                  <div className=" cart-items-item" key={item._id}>
                    <div className="image_and_name">
                      <img src={item.image} alt="" />
                      <p className="item-name">{item.name}</p>
                    </div>

                    <p className="cart-item-mod">
                      <img
                        onClick={() => removeFromCart(item._id)}
                        className="modify"
                        src={datas.minus}
                        alt=""
                      />
                      {cartItems[item._id]}
                      <img
                        onClick={() => addToCart(item._id)}
                        className={
                          cartItems[item._id] === 3 ? "hidden" : "modify"
                        }
                        src={datas.plus}
                        alt=""
                      />
                    </p>
                    <button
                      onClick={() => removeAll(item._id)}
                      className="delete"
                    >
                      <img className="modify" src={datas.deleteit} alt="" />
                    </button>

                    <div className="price-details">
                      <p>₹{item.price}</p>

                      {/* <p className="total">Total: <br className="br"/> ₹{item.price * cartItems[item._id]}</p> */}
                      <p
                        className={cartItems[item._id] > 1 ? "total" : "hidden"}
                      >
                        Total: <br className="br" /> ₹
                        {item.price * cartItems[item._id]}
                      </p>
                    </div>
                  </div>
                  <hr />
                </>
              );
            }
            return null;
          })}
        </div>
        <div className="cart-right">
          <div className="cart-total">
            <h2>Payment Summary</h2>
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
              <div className="cart-total-details total-amount">
                <p>Total</p>
                <p>
                  ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 99}
                </p>
              </div>
            </div>
            <button
              className={getTotalCartAmount() === 0 ? "disable" : ""}
              onClick={() => navigate("/order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="cart-promocode"></div>
        </div>
        <div className="gap">
          {/* the reason of this unnecessary div is to give a gap under cart-right as I couldn't give a property which support auto margin buttom with minimum margin buttom  */}
        </div>
      </div>
    </>
  );
}

export default Cart;
