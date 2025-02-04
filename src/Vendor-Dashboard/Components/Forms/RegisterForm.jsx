import React, { useState } from 'react'
import { Api_Path } from '../../Data/API_path'
import { useNavigate } from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'

const RegisterForm = () => {
  const navigate = useNavigate()
  const[username, setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const[showpassword, setShowpassword] = useState(false)


  const passwordHandler = ()=>{
    setShowpassword(!showpassword)
  }


const RegisterHandler = async(e)=>{
    e.preventDefault()
    setLoading(true)
 try {
  const response = await fetch(`${Api_Path}/vendor/register`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({username,email,password})
  })

  const data = await response.json()
  if(response.ok){
    console.log('vendor registered sucessfully')
    alert("vendor registered sucessfully")
    // setUsername("")
    // setEmail("")
    // setPassword("")
    navigate('/login')
    
  }
  
 } catch (error) {
  console.log(error)
  alert("registration failed")
  
 }finally{
  setLoading(false)
 }
}





  return (

    

    
    <div className="card">
      
      {loading && <div className="loaderSection">
        <ThreeCircles
          visible={loading}
          height={160}
          width={130}
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />  <p>Register in process... Please wait</p>
      </div>}


      {!loading &&   <form onSubmit={RegisterHandler}>
    <h1>Register</h1>
      <div>
        <label >Username</label>
        <input type="text" id="username" placeholder='Enter your username' value={username} onChange={(e)=>setUsername(e.target.value)} name="username" required/>
      </div>
      <div>
        <label >Email</label>
        <input type="email" id="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} name="email" required/>
      </div>
      <div>
        <label >Password</label>
        <input type={showpassword?"text":"password"} id="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} name="password" required/>
        <span className='view' onClick={passwordHandler}>{!showpassword ? "Show":"Hide"}</span>
      </div>
      <button type="submit">Register</button>
    </form> }
   
  
  </div>
  )
}

export default RegisterForm