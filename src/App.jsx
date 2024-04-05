import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import ScrollNavbar from './components/ScrollNavbar/ScrollNavbar'
import Cart from './pages/Cart/Cart'
import Hamburger from './components/HamburgerMenu/Hamburger'
import { useState } from 'react'
import Mobile from './pages/Mobile/Mobile'
import SmartWatch from './pages/SmartWatch/SmartWatch'
import Laptop from './pages/Laptop/Laptop'
import Camera from './pages/Camera/Camera'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Privacy from './pages/Privacy/Privacy'

function App() {
  const [brand1,setBrand1] = useState('All')
  const [showHam, setShowHam] = useState(false)

  const location = useLocation();
  const deviceCategories = {
    '/smartwatch': 'Smartwatch',
    '/mobile': 'Phone',
    '/laptop': 'Laptop',
    '/camera': 'Camera',

  };


  const category = deviceCategories[location.pathname] || 'Phone';

  

  return (
    <>

    {setShowHam?<Hamburger showHam={showHam} setShowHam={setShowHam}/>:<></>}
  
    <div className="app">
      <ScrollNavbar setShowHam={setShowHam} />
     <Navbar setShowHam={setShowHam}/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/mobile' element={<Mobile category={category} brand={brand1} setBrand={setBrand1}/>}/>
      <Route path='/smartwatch' element={<SmartWatch category={category}/>}/>
      <Route path='/laptop' element={<Laptop category={category}/>}/>
      <Route path='/camera' element={<Camera category={category}/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
     </Routes>
        <Footer />
     </div>
        </>
  )
}


export default App
