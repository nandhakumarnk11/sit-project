
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');


    const [password, setPassword] = useState('');

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated) {
          navigate('/dashboard');
        }
      }, [navigate]);




  
    const handleLogin = (e) => {
      e.preventDefault();

      console.log({username},{password})


      if (username === 'admin@gmail.com' && password === '123') {
        navigate('/')
      } else {
        alert('Invalid username or password');
      }

     
      localStorage.setItem("auth",true)

    };
  
  return (
    <div>
     
      <form onSubmit={handleLogin} className='login-form' >
      <h2 className='login-h2'>Login Page</h2>
          <label className='login-label-username'>Username</label><br></br>
          <input className='login-input-password' type="text" placeholder="username"value={username}onChange={(e) => setUsername(e.target.value)}/> <br></br>

          <label className='login-label-password'>Password</label> <br></br>
          <input className='login-input-password' type="password"  placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br></br>
      
        <button className='login-btn'type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
