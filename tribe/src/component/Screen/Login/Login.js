import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {CgAppleWatch} from "react-icons/cg"
import './Login.css'


function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(email,password);
  }

  return (
    <div className='login__container'>
      <div className='login__card'>
        <div className='login__header'>
        <Link to="/">
          <CgAppleWatch className='login__icon'/>
          <span className="login__website__title">urbanTribe</span>
        </Link>
        </div>
        <h3>Login</h3>
        <p>Continue to urbanTribe</p>
        <div className='login__form'>
          <form onSubmit={submitHandler}>
            <label>Email</label><br/>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/><br/>

            <label>Password</label><br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>

            <button type='submit'>Login</button>
          </form>
        </div>
        <div className='new__account'>
          <p>New to urbanTribe ? <span className='signIn__link'>
            <Link to="/sign">Get Started</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Login