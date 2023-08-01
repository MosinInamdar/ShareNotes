import React from 'react'
import './Navbar.css';



const Navbar = () => {
  
  return (
    <div className="nav">
      {/* <input type="checkbox" id="nav-check"> */}
      <div className="nav-header">
        <div className="nav-title">
          ShareNotes
        </div>
      </div>
      {/* <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div> */}
      
      <div className="nav-links">
        <a href="/">Login</a>
        <a href="/Signup">Signup</a>
        
      </div>
    </div>

  )
}

export default Navbar