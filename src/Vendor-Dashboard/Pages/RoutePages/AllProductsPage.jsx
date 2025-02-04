import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import AllProducts from '../../Components/AllProducts'

const AllProductsPage = ({showlogout, logoutHandler}) => {
  return (
    <div>
        <Navbar showlogout={showlogout} logoutHandler={logoutHandler}/>
        <div className="collectionSection">
            <Sidebar/>
            <AllProducts/>
        </div>
    </div>
  )
}

export default AllProductsPage