import React from 'react'
import { Link } from 'react-router-dom';
import "./Reg.css"


const Reg = () => {


    

 
  return (
    <div className='reg-tag'>
      
       <form className='reg-form'>
       <h3 className='reg-h3'>Registration  </h3>
        <label>name</label>
        <input type="text"
        id="username-1"
        name="text"
        placeholder="name" 
        autoComplete="username"
        className="form-control input-name"  />


        < label className='reg-label-email'>email</label>
        <input type="text"
        id="username-2"
        name="email"
        placeholder="email" 
        autoComplete="username"
        className="form-control " />

        < label  className='reg-label-password' >password</label>
        <input type="password"
        id="username-3"
        name="password"
        placeholder="password" 
        autoComplete="username"
        className="form-control " />

      <Link to="/Login">
      <button className='reg-btn'>Login</button>
      </Link>





       </form>
    </div>
     
     
    
  )
}

export default Reg
