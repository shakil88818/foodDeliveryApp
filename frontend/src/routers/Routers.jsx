import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"

import HomePage from "../pages/homePage/HomePage"
import CartPage from "../pages/cart/CartPage"
import Footer from "../components/footer/Footer"


const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Routers
