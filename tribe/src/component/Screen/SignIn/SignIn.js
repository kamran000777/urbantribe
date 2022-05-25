import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {CgAppleWatch} from "react-icons/cg"
import './SignIn.css'

function SignIn() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [reEnter__password,setReEnter__password] = useState("");
  const [name,setName] = useState("");
  
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(email,password);
  }

  return (
    <div className='sign__container'>
      <div className='sign__card'>
        <div className='sign__header'>
        <Link to="/">
          <CgAppleWatch className='sign__icon'/>
          <span className="sign__website__title">urbanTribe</span>
        </Link>
        </div>
        <h3>Create a urbanTribe ID</h3>
        <p>All in one destination for smart people</p>

        <div className='sign__form'>
          <form onSubmit={submitHandler}>

            <label>Name</label><br/>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/><br/>

            <label>Email</label><br/>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/><br/>
          
            <label>Password</label><br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            
            <p className='password__info'>Your password must be at least 6 characters.</p>

            <label>Confirm new password</label><br/>
            <input type="password" value={reEnter__password} onChange={(e)=>setReEnter__password(e.target.value)}/><br/>

            <button type='submit'>Create urbanTribe id</button>
          </form>
        </div>
        <div className='login__account'>
          <input type="checkbox" required/><span>You agree to the Terms and Conditions</span>
          <p className="login__link__info">Already had a account ? <span className='login__link'>
            <Link to="/login">Log in</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default SignIn