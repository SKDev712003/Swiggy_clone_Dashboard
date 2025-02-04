import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import LoginForm from '../../Components/Forms/LoginForm'

const LoginPage = ({showlogout, logoutHandler}) => {
  return (
    <div>
        <Navbar showlogout={showlogout} logoutHandler={logoutHandler}/>
        <div className="collectionSection">
            <Sidebar/>
            <LoginForm/>
        </div>
    </div>
  )
}

export default LoginPage