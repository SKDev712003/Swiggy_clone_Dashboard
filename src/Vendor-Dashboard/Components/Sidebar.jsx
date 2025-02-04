import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate()

const firmId = localStorage.getItem('firmId')




const firmHandler = ()=>{
  const loginToken = localStorage.getItem('loginToken')
  if(!loginToken){
    alert("please login")
  }else{
    navigate('/Add-firm')
  }
}
  const ProductHandler = ()=>{
    const loginToken = localStorage.getItem('loginToken')
    if(!loginToken){
      alert("please login")
    }else{
      navigate('/Add-product')
    }

}

const AllProductHandler = ()=>{
  const loginToken = localStorage.getItem('loginToken')
  if(!loginToken){
    alert("please login")
  }else{
    navigate('/All-products')
  }

}

  return (
    <div className='sideSection'>
        <ul className='sidelinks'>
          {!firmId ? <li className="sidelink" onClick={firmHandler}>Add Firm</li>:null}
            <li className="sidelink" onClick={ProductHandler}>Add Products</li>
            <li className="sidelink"onClick={AllProductHandler}>All Products</li>
            <li className="sidelink">User Details</li>
        </ul>

    </div>
  )
}

export default Sidebar