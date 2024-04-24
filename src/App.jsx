import { Route, Routes, useLocation  } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import ScrollNavbar from './components/ScrollNavbar/ScrollNavbar'
import Cart from './pages/Cart/Cart'
import Hamburger from './components/HamburgerMenu/Hamburger'
import { useEffect, useState } from 'react'
import Mobile from './pages/Mobile/Mobile'
import SmartWatch from './pages/SmartWatch/SmartWatch'
import Laptop from './pages/Laptop/Laptop'
import Camera from './pages/Camera/Camera'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Privacy from './pages/Privacy/Privacy'
import Order from './pages/Order/Order'
import Payment from './pages/Payment/Payment'
import Delivery from './pages/Delivery/Delivery'
import Terms from './pages/Terms/Terms'
import Return from './pages/Return/Return'


const ScrollToTop=()=>{
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

}

function App() {
  const [gadgetBrand,setGadgetBrand] = useState(null)
  const [showHam, setShowHam] = useState(false)
  const [selectedValue, setSelectedValue] = useState("All");

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
    <Route path='/mobile' element={<Mobile selectedValue={selectedValue} setSelectedValue={setSelectedValue} location={location} category={category} gadgetBrand={gadgetBrand} setGadgetBrand={setGadgetBrand}/>}/>
    <Route path='/smartwatch' element={<SmartWatch selectedValue={selectedValue} setSelectedValue={setSelectedValue} location={location} category={category} gadgetBrand={gadgetBrand} setGadgetBrand={setGadgetBrand}/>}/>
    <Route path='/laptop' element={<Laptop selectedValue={selectedValue} setSelectedValue={setSelectedValue} location={location} category={category} gadgetBrand={gadgetBrand} setGadgetBrand={setGadgetBrand}/>}/>
    <Route path='/camera' element={<Camera selectedValue={selectedValue} setSelectedValue={setSelectedValue} location={location} category={category} gadgetBrand={gadgetBrand} setGadgetBrand={setGadgetBrand}/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/privacy' element={<Privacy/>}/>
    <Route path='/delivery' element={<Delivery/>}/>
    <Route path='/terms' element={<Terms/>}/>
    <Route path='/return' element={<Return/>}/>
    <Route path='/order/payment' element={<Payment/>}/>
   </Routes>
      <Footer />
   </div>
   <ScrollToTop />
   </>
  )
}
export default App