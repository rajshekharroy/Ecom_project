import React, { useContext } from 'react'
import './DeviceDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Device from '../Devices/Device'

function DeviceDisplay({brand}) {

    const {product_list} = useContext(StoreContext)
  return (
    <div className='smartphone-display'>
        <h2>{brand==="All"?"Explore Our Selection of Smartphones, Smartwatches, Laptops, and Cameras !":`Your ${brand} devices!`}</h2>
        <div className="smartphone-display-list">
            {product_list.map((item,index)=>{
                if (brand==="All" || brand===item.brand_name){
                    return (
                        <Device key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} category={item.category}/>
                    )
                }
            })}
        </div>
    </div>
  )
}

export default DeviceDisplay