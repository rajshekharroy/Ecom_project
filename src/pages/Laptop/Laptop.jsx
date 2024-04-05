import React, { useContext } from 'react'
import './Laptop.css'
import { StoreContext } from '../../context/StoreContext'
import Device from '../../components/Devices/Device'
import { datas } from '../../assets/data'

function Laptop({category}) {
    const {product_list,searchRes} = useContext(StoreContext)

    const finalRes = product_list.filter((item)=>{
        return(
          item.name.toLowerCase().includes(searchRes.toLowerCase()) ||
        item.brand_name.toLowerCase().includes(searchRes.toLowerCase())
        )
    })

  return (
    <div className='phone-page'>
    {/* <h2>{category==="Phone"?"Explore Our Selection of Smartphones, Smartwatches, Laptops, and Cameras !":`Your devices!`}</h2> */}
    <img className='phone-ad' src={datas.laptopAd} alt="" />
    <h1>Experience Mobility and Power: Explore Our Laptop Collection</h1>
    <div className="smartphone-display-list">
        {finalRes.map((item,index)=>{
            if (category===item.category){
                return (
                    <Device key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} category={item.category}/>
                )
            }
        })}
    </div>
</div>
  )
}

export default Laptop