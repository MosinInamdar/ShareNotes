import React from 'react'
import './Login.css';

const Signup = () => {
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Course"/>
          <input type="text" placeholder="College"/>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <button>login</button>
          <p class="message">Already registered? <a href="/">Sign In</a></p>
        </form>
      </div>
    </div>

  )
}

export default Signup
