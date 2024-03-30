import React, { useState } from 'react'
import './Home.css'
import Header from '../components/Header/Header'
import ShopByBrand from '../components/ShopByBrand/ShopByBrand'
import DeviceDisplay from '../components/DeviceDisplay/DeviceDisplay'

function Home() {
  const [brand,setBrand] = useState('All')
  return (
    <div className='home-section'>
        <Header />
        <ShopByBrand brand={brand} setBrand={setBrand}/>
        <DeviceDisplay brand={brand}/>
    </div>
  )
}

export default Home