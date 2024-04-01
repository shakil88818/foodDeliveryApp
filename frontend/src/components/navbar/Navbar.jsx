import { useState } from "react";
import { assets } from "../../assets/assets"
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menubar, setMenubar] = useState("home")
  return (
    <>
      <header className="header-wrapper">
        <div className="container-c">
          <div className="navbar-container">

            <div className="logo">
              <img src={assets.logo} alt="logo" />
            </div>

            <div className="menu">
              <ul>
                <Link to="/" onClick={()=>{setMenubar("home")}} className={menubar==="home"? "active" : ""}><li>Home</li></Link>
                <a href="#explore" onClick={()=>{setMenubar("menu")}} className={menubar==="menu"? "active" : ""}><li>Menu</li></a>
                <a href="#appDownload" onClick={()=>{setMenubar("mobile-app")}} className={menubar==="mobile-app"? "active" : ""}><li>Mobile App</li></a>
                <a href="#footer" onClick={()=>{setMenubar("contact-us")}} className={menubar==="contact-us"? "active" : ""}><li>Contact Us</li></a>
              </ul>
            </div>

            <div className="menu-signup">
              <div className="search-icon">
              <img src={assets.search_icon} alt="search" />
              </div>
              <div className="basket_icon">
              <img src={assets.basket_icon} alt="search" />
              <div className="dot"></div>
              </div>
              <button className="button-1">Signup</button>
            </div>

          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
