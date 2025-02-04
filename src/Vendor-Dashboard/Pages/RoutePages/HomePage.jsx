import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <div className="collectionSection">
            <Sidebar/>
            
        </div>
    </div>
  )
}

export default HomePage