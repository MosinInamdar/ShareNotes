import React from 'react'
import './Navbar.css';



const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            {/* <input type="checkbox" name="" id=""> */}
            
            <ul className="menu-items">
                <li><a href="/">Login</a></li>
                <li><a href="/Signup">Signup</a></li>
                
            </ul>
            <h1 className="logo">Share Notes</h1>
        </div>
    </nav>

  )
}

export default Navbar
