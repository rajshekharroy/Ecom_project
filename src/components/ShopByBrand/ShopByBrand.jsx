import React from 'react'
import './ShopByBrand.css'
import { brands } from '../../assets/data'

function ShopByBrand({brand,setBrand}) {
  return (
    <div className='shop-by-brand'>
        <h1>SHOP BY BRAND</h1>
        <div className="all-brand-list">
            {brands.map((item,index)=>{
                return(
                    <div onClick={()=>setBrand(prev=>prev===item.brand_name?"All":item.brand_name)} key={index} className='brand-names'>
                        <img src={item.brand_image} alt="" className={brand===item.brand_name?"active":""} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ShopByBrand