import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import RegisterForm from '../../Components/Forms/RegisterForm'



const RegisterPage = ({showlogout, logoutHandler}) => {
  return (
    <div>
        <Navbar showlogout={showlogout} logoutHandler={logoutHandler}/>
        <div className="collectionSection">
            <Sidebar/>
            <RegisterForm/>
        </div>
        
    </div>
  )
}

export default RegisterPage