import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({showlogout, logoutHandler}) => {
  const FirmName = localStorage.getItem('firmName')
  return (
    <div className='navSection'>
        <div className="company">

          <Link to='/' className='link'>  <p>Vendor Dashboard</p></Link>
           
        </div>
        <h3 style={{fontWeight:"500"}}>Firmname : {FirmName}</h3>
        {!showlogout? <div className="Auth-section">
          <Link className="link" to='/register'> <span>Register</span></Link>
          <span> / </span>
           <Link className="link" to='/login'> <span>Login</span></Link>
           
        </div>:<span style={{cursor:"pointer"}} onClick={logoutHandler}>logout</span>}

    </div>
  )
}

export default Navbar