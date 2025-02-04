import React, { useEffect, useState } from 'react'
import { Routes,Route, Navigate, useNavigate } from 'react-router-dom'
import HomePage from './RoutePages/HomePage'
import RegisterPage from './RoutePages/RegisterPage'
import LoginPage from './RoutePages/LoginPage'
import AddFirmPage from './RoutePages/AddFirmPage'
import AddProductPage from './RoutePages/AddProductPage'
import AllProductsPage from './RoutePages/AllProductsPage'
import WelcomePage from './RoutePages/WelcomePage'

const LandingPage = () => {
  const [showlogout, setShowlogout] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    const loginToken = localStorage.getItem('loginToken')
    if(loginToken){
      setShowlogout(true)
    }
  },[])


  const requireAuth = (element)=>{
    const loginToken = localStorage.getItem('loginToken')
   return  loginToken ? element : <Navigate to='/'/>


  }

  const requireHomeAuth = (element)=>{
  const loginToken = localStorage.getItem('loginToken')
   return !loginToken ? element:<Navigate to='/welcome'/>

  }

  

  const requireFirmAuth = (element)=>{
    const loginToken = localStorage.getItem('loginToken')
    const firmId = localStorage.getItem('firmId')
    return loginToken && !firmId ? element : <Navigate to='/'/>
  }


  const logoutHandler = ()=>{
    if(confirm("are you sure to log-out")){
      localStorage.removeItem('loginToken')
      localStorage.removeItem('firmId')
      localStorage.removeItem('firmName')
      setShowlogout(false)
      window.location.reload()
    }
  }
  

  






  return (
    <div>
        <Routes>
            <Route path='/' element={requireHomeAuth(<HomePage/>)}/>
            <Route path='/register' element={requireHomeAuth(<RegisterPage showlogout ={showlogout} logoutHandler={logoutHandler}/>)}/>
            <Route path='/login' element={requireHomeAuth(<LoginPage showlogout ={showlogout} logoutHandler={logoutHandler}/>)}/>
            <Route path='/Add-firm' element={requireFirmAuth(<AddFirmPage showlogout ={showlogout} logoutHandler={logoutHandler}/>)}/>
            <Route path='/Add-product' element={requireAuth(<AddProductPage showlogout ={showlogout} logoutHandler={logoutHandler}/>)}/>
            <Route path='/All-products' element={requireAuth(<AllProductsPage showlogout={showlogout} logoutHandler={logoutHandler}/>)}/>
            <Route path='/welcome' element={requireAuth(<WelcomePage showlogout ={showlogout} logoutHandler={logoutHandler}/>)}/>
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      
    </div>
  )
}

export default LandingPage