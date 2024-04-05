import React, { useContext } from 'react'
import './SmartWatch.css'
import { StoreContext } from '../../context/StoreContext'
import Device from '../../components/Devices/Device'
import { datas } from '../../assets/data'

function SmartWatch({category}) {
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
    <img className='phone-ad' src={datas.watchAd} alt="" />
    <h1>Stay Connected and Stylish: Explore Our Smartwatch Collection</h1>
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

export default SmartWatch