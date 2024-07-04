import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close" 
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder='Your Name' required />
          )}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing, I Agree to the terms of use and privacy policy.</p>
        </div>
        {currState==="Login"?<p>Create A New Account. <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        :<p>Already Have An Account<span onClick={()=>setCurrState("Login In")}>Click Here</span></p>
    }      
    </form>
    </div>
  );
};

export default Login;
