import React, { useContext } from 'react'
import './Device.css'
import { StoreContext } from '../../context/StoreContext'

function Device({id,name,image,price,description,category}) {
  
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  const redirectToGsmArena = () => {
    if (category === "Phone"){
    window.open(`https://www.gsmarena.com/results.php3?sQuickSearch=yes&sName=${name}`, '_blank');
    }else {
      window.open(`https://www.smartprix.com/products/?q=${name}`,'_blank');
    }
};


  return (
    <div className='device'>
        <div className="device-img-container">
            <img onClick={redirectToGsmArena} src={image} alt="" className='device-image' />
            {!cartItems[id]?<button className='add-to-cart' onClick={()=>addToCart(id)}>Add To Cart</button>:<button onClick={()=>removeFromCart(id)} className='remove'>Remove</button>}

            <div className="device-info">
            <p className='device-name'>{name}</p>
            <div className="description">{description}</div>
            <div className="price">₹{price}</div>
        </div>
        </div>
       
    </div>
  )
}

export default Device