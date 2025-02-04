import React, { useState } from 'react'
import { Api_Path } from '../../Data/API_path'
import { useNavigate } from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'

const LoginForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
   const[showpassword, setShowpassword] = useState(false)
  
  
    const passwordHandler = ()=>{
      setShowpassword(!showpassword)
    }
  



const loginHandler = async(e)=>{
  e.preventDefault()
  setLoading(true)

  try {

    const response = await fetch(`${Api_Path}/vendor/login`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email,password})
    })

    const data = await response.json()
    
    
    if(response.ok){
      console.log('login success')
      alert("login success")
      const loginToken = data.token
      localStorage.setItem('loginToken', loginToken)
     
      navigate('/welcome')
     
      
    }
    const vendorId = data.vendorId
    

    const vendorResponse = await fetch(`${Api_Path}/vendor/single/${vendorId}`)
    
    const vendorData = await vendorResponse.json()
    window.location.reload()
   
    if(vendorResponse.ok){
      const firmId = vendorData.firmId;
      const firmName = vendorData.firmName
      localStorage.setItem('firmId',firmId)
      localStorage.setItem('firmName',firmName)
    }
    
  } catch (error) {
    console.log(error)
    alert("login failed")
  }
}



  return (
    <div className="login-card">

      {loading && <div className="loaderSection">
              <ThreeCircles
                visible={loading}
                height={160}
                width={130}
                color="#4fa94d"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />  <p>login in process... Please wait</p>
            </div>}
       {!loading &&  <form onSubmit={loginHandler}>
    <h1>Login</h1>
      <div>
        <label >Email</label>
        <input type="email" id="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} name="email" required/>
      </div>
      <div>
        <label >Password</label>
        <input type={showpassword ?"text":'password'} id="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} name="password" required/>
        <span className='view' onClick={passwordHandler}>{!showpassword ? "Show":"Hide"}</span>
      </div>
      <button type="submit">Login</button>
    </form>}
   

  </div>
  )
}

export default LoginForm