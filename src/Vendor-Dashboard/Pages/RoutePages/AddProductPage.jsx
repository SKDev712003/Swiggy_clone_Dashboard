import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import AddProductForm from '../../Components/Forms/AddProductForm'

const AddProductPage = ({showlogout, logoutHandler}) => {
  return (
    <div>
        <Navbar showlogout={showlogout} logoutHandler={logoutHandler}/>
        <div className="collectionSection">
            <Sidebar/>
            <AddProductForm/>
        </div>
    </div>
  )
}

export default AddProductPage