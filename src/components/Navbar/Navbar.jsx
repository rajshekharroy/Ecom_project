import React from 'react'
import { datas } from '../../assets/data'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
      <img src={datas.logo} alt="" className='logo'/>
    </div>
  )
}

export default Navbar