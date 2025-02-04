import React from 'react'
import Navbar from  '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'



const WelcomePage = ({showlogout, logoutHandler}) => {

  const firmName = localStorage.getItem('firmName')
  return (
    <div>
        <Navbar showlogout={showlogout} logoutHandler={logoutHandler}/>
        <div className="collectionSection">
        <Sidebar/>
            <div style={{width:"90%"}} className="welcomeSection">
           
            <h1 style={{ marginTop:"3%", color:"#0562f7",fontWeight:"600" ,fontSize:"24px"}}>Welcome {firmName}</h1>
            <div className="chef">
             <img src="Assets/chef.jpg" alt="" />
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default WelcomePage