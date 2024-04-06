import React, { useContext, useRef } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Order() {
    const {getTotalCartAmount} = useContext(StoreContext)
    const { loginWithRedirect , isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const formRef = useRef(null);

    const handleButtonClick = () => {
      if (formRef.current.reportValidity()) {
        navigate('./payment');
      }
    };


    return (
      <>
        <div action="" className="place-order">
          <div className="place-order-left">
            <h2 className="title">Shipping Address</h2>
            <form ref={formRef}>

            <div className="multi-fields">
            <div className="input-box">
              <input type="text" required/>
              <span>First Name</span>
              </div>

              <div className="input-box">
              <input type="text" required/>
              <span>Last Name</span>
            </div>
            </div>

              <div className="input-box single">
                <input type="number" required />
                <span>Mobile No</span>
              </div>

              <div className="multi-fields">
              <div className="input-box">
              <input type="number" required/>
              <span>Pincode</span>
              </div>

              <div className="input-box">
              <input type="text" required/>
              <span>City</span>
            </div>
              </div>

              <div className="multi-fields">
              <div className="input-box">
              <input type="text" required/>
              <span>Landmark</span>
              </div>

              <div className="input-box">
              <input type="text" required/>
              <span>State</span>
            </div>
              </div>

              <div className="input-box single">
                <input type="text" required />
                <span>House No, Apartment etc.</span>
              </div>

              <div className="input-box single">
                <input type="text" required />
                <span>Street, Area, etc.</span>
              </div>
   
            </form>
           
          </div>

          <div className="place-order-right">
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
                  <p>₹{getTotalCartAmount()===0?0:99}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Total</p>
                  <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+99}</p>
                </div>
              </div>
              {/* <button className={getTotalCartAmount()===0?"disable":""} >PROCEED TO PAYMENT</button> */}
              {
                isAuthenticated 
                ?( <button onClick={handleButtonClick}> PROCEED TO PAYMENT </button>)
              
                : (<button onClick={() => {loginWithRedirect(); }}>
                  
                PROCEED TO PAYMENT
              </button>)
              }
            </div>
          </div>
        </div>
        </>
      );
}

export default Order




// import React, { useContext, useRef } from 'react';
// import './Order.css';
// import { StoreContext } from '../../context/StoreContext';
// import { useNavigate } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

// function Order() {
//   const { getTotalCartAmount } = useContext(StoreContext);
//   const { loginWithRedirect, isAuthenticated } = useAuth0();
//   const navigate = useNavigate();
//   const formRef = useRef(null);

//   const handleButtonClick = () => {
//     if (formRef.current.reportValidity()) {
//       navigate('./payment');
//     }
//   };

//   return (
//     <>
//       <div action="" className="place-order">
//         <div className="place-order-left">
//           <h2 className="title">Shipping Address</h2>
//           <form ref={formRef}>
//             <div className="multi-fields">
//               <div className="input-box">
//                 <input type="text" required />
//                 <span>First Name</span>
//               </div>

//               <div className="input-box">
//                 <input type="text" required />
//                 <span>Last Name</span>
//               </div>
//             </div>

//             <div className="input-box single">
//               <input type="number" required />
//               <span>Mobile No</span>
//             </div>

//             <div className="multi-fields">
//               <div className="input-box">
//                 <input type="number" required />
//                 <span>Pincode</span>
//               </div>

//               <div className="input-box">
//                 <input type="text" required />
//                 <span>City</span>
//               </div>
//             </div>

//             <div className="multi-fields">
//               <div className="input-box">
//                 <input type="text" required />
//                 <span>Landmark</span>
//               </div>

//               <div className="input-box">
//                 <input type="text" required />
//                 <span>State</span>
//               </div>
//             </div>

//             <div className="input-box single">
//               <input type="text" required />
//               <span>House No, Apartment etc.</span>
//             </div>

//             <div className="input-box single">
//               <input type="text" required />
//               <span>Street, Area, etc.</span>
//             </div>
//           </form>
//         </div>

//         <div className="place-order-right">
//           <div className="cart-total">
//             <h2>Cart Totals</h2>
//             <div>
//               <hr />
//               <div className="cart-total-details">
//                 <p>Subtotal</p>
//                 <p>₹{getTotalCartAmount()}</p>
//               </div>
//               <hr />
//               <div className="cart-total-details">
//                 <p>Packaging Fee</p>
//                 <p>₹{getTotalCartAmount() === 0 ? 0 : 99}</p>
//               </div>
//               <hr />
//               <div className="cart-total-details">
//                 <p>Total</p>
//                 <p>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 99}</p>
//               </div>
//             </div>
//             {
//         isAuthenticated 
//         ? <button onClick={handleButtonClick}>PROCEED TO PAYMENT</button>
//         : <button onClick={() => loginWithRedirect()}>PROCEED TO PAYMENT</button>
//       }
//           </div>
//         </div>
//       </div>
     
//     </>
//   );
// }

// export default Order;
