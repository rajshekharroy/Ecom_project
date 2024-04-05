// import { createContext, useEffect, useState } from "react";
// import { product_list } from "../assets/data";
// import { json } from "react-router-dom";


// export const StoreContext = createContext(null);


// const StoreContextProvider = (props) =>{
    


//     const getLocalCartData = ()=>{
//       let newCartData = localStorage.getItem("cartItems");
  
//       if (newCartData == []){
//        return []
//       }else {
//         return JSON.parse(newCartData)
//       }
//     }
//     const [cartItems, setCartItems] = useState({getLocalCartData});

//  useEffect(() => {
//     const storedCartItems = localStorage.getItem("cartItems");
//     if (storedCartItems) {
//       setCartItems(JSON.parse(storedCartItems));
//     }
//   }, []);


//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);


//     const addToCart = (itemId) =>{
//         if (!cartItems[itemId]) {
//             setCartItems((prev)=>({...prev, [itemId]: 1}));
//         }else {
//             setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
//         }
//     };

//     const removeFromCart = (itemId) =>{
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
// };

// const getTotalCartAmount = () =>{
  
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = product_list.find((product) => product._id === item);
//         totalAmount += itemInfo.price * cartItems[item];
//       }
     
//     }
//     return totalAmount;
// };

// const removeAll = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: "" }));
//   };


//   const contextValue = {
//     product_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     removeAll
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;


import { createContext, useEffect, useState } from "react";
import { product_list } from "../assets/data";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const getLocalCartData = () => {
    const newCartData = localStorage.getItem("cartItems");
    return newCartData ? JSON.parse(newCartData) : {};
  };

  const [cartItems, setCartItems] = useState(() => getLocalCartData());

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    if (cartItems[itemId] && cartItems[itemId] >= 3) {
      return;
    }
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = product_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const cartNo = () => {
    for (const item in cartItems){
      if (cartItems[item]>0){
      }
    }
  }
  cartNo()

  const removeAll = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: "" }));
  };



    const [searchRes, SetSearchRes] = useState("")

    const handleSearch = (query)=>{
      SetSearchRes(query)
    }



 

  const contextValue = {
    product_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    removeAll,
    searchRes,
    handleSearch
  };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
