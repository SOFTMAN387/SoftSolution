import React from 'react'
import "./navbar.css";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <Link to="" className="navbar-logo" >
    <i className="material-icons">Soft</i> Solution</Link>
      <ul className="navbar-links">
        <li className="navbar-dropdown">
          <Link to="">Soups</Link>
          <div className="dropdown">
            <Link to="">Tomato Soup</Link>
            <Link to="">Veg Manchow Soup</Link>
            <Link to="">Veg Hot Soup</Link>
          </div>
        </li>
        <li className="navbar-dropdown">
          <Link to="">Sweets</Link>
          <div className="dropdown">
            <Link to="">Ladoo</Link>
            <Link to="">Besan Ladoo</Link>
            <Link to="">Ghee Besan Ladoo</Link>
            <Link to="">Nariyal Ladoo</Link>
            <Link to="">Kaju Katli</Link>
            <Link to="">Rasgulla</Link>
          </div>
        </li>
        <li className="navbar-dropdown">
          <Link to="">Breads</Link>
          <div className="dropdown">
            <Link to="">Lachha Paratha</Link>
            <Link to="">Rumali Roti</Link>
            <Link to="">Tandoori Roti</Link>
            <Link to="">Butter Roti</Link>
            <Link to="">Plain Naan</Link>
            <Link to="">Butter Naan</Link>
          </div>
        </li>
        <li className="navbar-dropdown">
          <Link to="">Rice</Link>
          <div className="dropdown">
            <Link to="">Plain Rice</Link>
            <Link to="">Veg Pulao</Link>
            <Link to="">Veg Biryani</Link>
            <Link to="">Paneer Biryani</Link>
            <Link to="">Lemon Rice</Link>
            <Link to="">Veg Kashmiri Pulao</Link>
          </div>
        </li>
        <li className="navbar-dropdown">
          <Link to="">Chinese</Link>
          <div className="dropdown">
            <Link to="">Paneer Chill Dry</Link>
            <Link to="">Paneer Garlic</Link>
            <Link to="">Veg Garlic</Link>
            <Link to="">Veg Chilli</Link>
          </div>
        </li>
      </ul>
   
    </div>
    
      
    </>
  )
}

export default Navbar;