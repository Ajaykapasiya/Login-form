import React from "react";
import { useState } from "react";
export default function AuthForm() {
  const [isLogin , setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active' : ""} onClick = {() => setIsLogin(true)} >login</button>
          <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin (false)}>signup</button>
        </div>
        {isLogin ? <>
        <div className="form">
          <h2>Login form</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget password</a>
          <button>Login</button>
          <p>Not a member? <a href="#" onClick={() => setIsLogin(false)}>Sign up</a></p>
        </div>

        </> : <>
        <div className="form">
        <h2>Sign up</h2>
           <input type="Email" placeholder="Email" />
           <input type="Password" placeholder="Create passowrd" />
           <input type="Password" placeholder="Confirm password" />
           <button>Sign up </button>
           </div>
        </>}
      </div>
    </div>
  );
}
