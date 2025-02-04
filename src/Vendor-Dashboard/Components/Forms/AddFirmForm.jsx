import React, { useState } from 'react'
import { Api_Path } from '../../Data/API_path'
import { useNavigate } from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'

const AddFirmForm = () => {

  const navigate = useNavigate()


  const[firmname,setFirmname] = useState("")
  const[area,setArea] = useState("")
  const[category,setCategory] = useState([])
  const[region,setRegion] = useState([])
  const[offer,setOffer] = useState("")
  const[file, setFile] = useState(null)
  const[loading, setLoading] = useState(false)


  const categoryHandler = (e)=>{
    const value = e.target.value

   if(category.includes(value)){
    setCategory(category.filter((item)=>{item!==value}))
   }else{
    setCategory([...category, value])
   }
  }


  const regionHandler = (e)=>{
    const value = e.target.value
    if(region.includes(value)){
      setRegion(region.filter((item)=>{item!==value}))
    }else{
      setRegion([...region, value])
    }
  }


  const formData = new FormData()
  formData.append('firmname',firmname)
  formData.append('area',area)
  formData.append('offer',offer)
  formData.append('image',file)
  category.forEach((item)=>{
    formData.append('category', item)
  })
  region.forEach((item)=>{
    formData.append('region',item)
  })

  


const firmHandler = async(e)=>{
  e.preventDefault()
  setLoading(true)

  try {

    const loginToken = localStorage.getItem('loginToken')
    if(!loginToken){
      console.log("loginToken not found")
    }

    const response = await fetch(`${Api_Path}/firm/add-firm`,{
      method:'POST',
      headers:{
        'token':`${loginToken}`
      },
      body:formData
    })

    const data = await response.json()
    console.log(data)
    
     if(response.ok){
      
    
  
    const firmId = data.firmId
  const firmName = data.resturantName
  localStorage.setItem('firmId',firmId)
localStorage.setItem('firmName',firmName)
alert("firm added sucessfully")
   window.location.reload()
  
   
    
    
}else if(data.message === 'vendor should only have one firm'){
  alert("vendor should only one firm")
  window.location.reload()
}else{
  alert("failed to add firm")
}







    
  } catch (error) {
    console.log(error)
    alert("failed to add firm")
    
  }finally{
    setLoading(false)
  }
}







  return (
     <div className="firm-card">
       {loading && <div className="loaderSection">
                    <ThreeCircles
                      visible={loading}
                      height={160}
                      width={130}
                      color="#4fa94d"
                      ariaLabel="three-circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />  <p>Adding firm in process... Please wait</p>
                  </div>}

    
   {!loading  &&  <form onSubmit={firmHandler}>
    <h1>Add Firm</h1>
      <div>
        <label >Firm Name</label>
        <input type="text" id="firmname" placeholder='Enter the firmname' value={firmname} onChange={(e)=>setFirmname(e.target.value)} name="firmname" required/>
      </div>
      <div>
        <label >Area</label>
        <input type="text" id="area" placeholder='Enter the area' value={area} onChange={(e)=>setArea(e.target.value)} name="area" required/>
      </div>
      <div>
        <label>Category</label>
        <div className="checkbox-group">
          <label><input type="checkbox" name="category" checked={category.includes('veg')} onChange={categoryHandler} value="veg"/>  Veg</label>
          <label><input type="checkbox" name="category" checked={category.includes('non-veg')} onChange={categoryHandler} value="non-veg"/>  Non-Veg</label>
        </div>
      </div>
      <div>
        <label>Region</label>
        <div className="checkbox-group">
          <label><input type="checkbox" name="region" checked={region.includes('south-indian')} onChange={regionHandler} value="south-indian"/> South Indian</label>
          <label><input type="checkbox" name="region" checked={region.includes('north-indian')} onChange={regionHandler} value="north-indian"/> North Indian</label>
          <label><input type="checkbox" name="region"checked={region.includes('chinese')}  onChange={regionHandler} value="chinese"/> Chinese</label>
          <label><input type="checkbox" name="region"checked={region.includes('bakery')}  onChange={regionHandler} value="bakery"/> Bakery</label>
        </div>
      </div>
      <div>
        <label >Offer</label>
        <input type="text" id="offer" placeholder='Enter the offer' value={offer} onChange={(e)=>setOffer(e.target.value)} name="offer"/>
      </div>
      <div>
        <label >Image</label>
        <input type="file" id="image" onChange={(e)=>setFile(e.target.files[0])} name="image"/>
      </div>
      <button type="submit">Add Firm</button>
    </form>}
  </div>
  )
}

export default AddFirmForm