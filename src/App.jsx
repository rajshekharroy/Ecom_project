import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import ScrollNavbar from './components/ScrollNavbar/ScrollNavbar'
import Cart from './pages/Cart/Cart'

function App() {


  return (
    <>
    <div className="app">
      <ScrollNavbar />
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart />}/>
     </Routes>
    </div>
        <Footer />
        </>
  )
}


export default App
