import React from 'react'
import { Link } from "react-router-dom";
import "./sidebar.css";
const SideBar = () => {

    return (
        <>
            <div className="header">
            <div className='nav-item'>
             
              
            </div>
         
          
            </div>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
            <label for="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li>Jelena Jovanovic <span>Web Developer</span></li>
                    <li><Link to="https://vanila.io" target="_blank">Company</Link></li>
                    <li><Link to="https://instagram.com/plavookac" target="_blank">Instagram</Link></li>
                    <li><Link to="https://twitter.com/plavookac" target="_blank">Twitter</Link></li>
                    <li><Link to="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank">YouTube</Link></li>
                    <li><Link to="https://www.linkedin.com/in/plavookac/" target="_blank">Linkedin</Link></li>
                </ul>
            </div>
            {/* <div id='center' className="main center">
    <div className="mainInner">
      <div>PURE CSS SIDEBAR TOGGLE MENU</div>
    </div>
    <div className="mainInner">
      <div>PURE CSS SIDEBAR TOGGLE MENU</div>
    </div>
    <div className="mainInner">
      <div>PURE CSS SIDEBAR TOGGLE MENU</div>
    </div>
  </div> */}
        </>
    )
}

export default SideBar;