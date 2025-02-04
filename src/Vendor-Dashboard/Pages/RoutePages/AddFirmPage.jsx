import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import AddFirmForm from '../../Components/Forms/AddFirmForm'

const AddFirmPage = ({showlogout, logoutHandler}) => {
  return (
    <div>
        <Navbar showlogout={showlogout} logoutHandler={logoutHandler}/>
        <div className="collectionSection">
            <Sidebar/>
            <AddFirmForm/>
        </div>
    </div>
  )
}

export default AddFirmPage