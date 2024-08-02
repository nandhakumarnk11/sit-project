import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css"
import { useEffect, useRef  } from 'react'

const Dashboard = () => {

    const navigate = useNavigate();
   

    const handleLogout = () => {
        localStorage.removeItem('auth');
        navigate('/login');
      };

      const h2Ref = useRef(null);
      const h2Ref1 = useRef(null);

      useEffect(() => {
        if (h2Ref.current) {
          console.log(h2Ref.current.innerHTML);
          console.log(h2Ref1.current.innerHTML);
        }
      }, [])


  return (
    <div  className='dash-black'>
        <button onClick={handleLogout} className='dash-btn'>logout</button>
    <h1 ref={h2Ref} className='dash-h2'>Dashboard</h1>
    <p  ref={h2Ref1} className='dash-para'>Welcome to the dashboard!</p>

  </div>
  )
}

export default Dashboard
