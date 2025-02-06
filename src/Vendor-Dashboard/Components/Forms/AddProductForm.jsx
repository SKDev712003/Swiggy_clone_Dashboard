import React, { useState } from 'react'
import { Api_Path } from '../../Data/API_path'
import { ThreeCircles, TailSpin } from 'react-loader-spinner'

const AddProductForm = () => {

const [productname, setProductname] = useState("")
const[price, setPrice] = useState("")
const [category, setCategory] = useState([])
const[bestseller,setBestSeller]= useState(false)
const[description, setDescription] = useState("")
const[file,setFile] = useState(null)
const[loading, setLoading] = useState(false)



const categoryHandler = (e)=>{
  const value = e.target.value;
  if(category.includes(value)){
    setCategory(category.filter((item)=>item!==value))
  }else{
    setCategory([...category, value])
  }

}

const bestsellerHandler = (e)=>{
  const value = e.target.value === 'true'
  setBestSeller(value)

}

const firmId = localStorage.getItem('firmId')

const productHandler = async(e)=>{
  
  e.preventDefault()
  setLoading(true)

  try {

    const formData = new FormData()
    formData.append('productname',productname)
    formData.append('price',price)
    formData.append('image',file)
    formData.append('bestseller', bestseller)
    formData.append('description',description)
    category.forEach((item)=>{
      formData.append('category',item)
    })
    
  const response = await fetch(`${Api_Path}/product/Add-product/${firmId}`,{
    method:"POST",
    body:formData
  })

  const data = await response.json()
 

  if(response.ok){
    alert("product added sucessfully")
    console.log(data)
    window.location.reload()
  }
  




  } catch (error) {
    console.log(error)
    alert("failed to add product")
    
  }
}


  return (
    <div className="product-card">
       {loading && <div className="loaderSection">
              <ThreeCircles
                visible={loading}
                height={160}
                width={130}
                color="#4fa94d"
                ariaLabel="three-circles"
                wrapperStyle={{}}
                wrapperClass=""
              />  <p>Adding Product in process... Please wait</p>
            </div>}
    
   {!loading &&  <form onSubmit={productHandler}>
    <h1>Add Product</h1>
      <div>
        <label for="productname">Product Name</label>
        <input type="text" id="productname" placeholder='Enter the product name' value={productname} onChange={(e)=>setProductname(e.target.value)} name="productname" required/>
      </div>
      <div>
        <label for="price">Price</label>
        <input type="text" id="price" placeholder='Enter the price' name="price" value={price} onChange={(e)=>setPrice(e.target.value)} required/>
      </div>
      <div>
        <label>Category</label>
        <div className="checkbox-group">
          <label><input type="checkbox" name="category" checked={category.includes('veg')} onChange={categoryHandler} value="veg"/> Veg</label>
          <label><input type="checkbox" name="category" checked={category.includes('non-veg')} onChange={categoryHandler} value="non-veg"/> Non-Veg</label>
        </div>
      </div>
      <div>
        <label>Bestseller</label>
        <div className="radio-group">
          <label><input type="radio" name="bestseller" checked={bestseller===true} value="true" onChange={bestsellerHandler} /> Yes</label>
          <label><input type="radio" name="bestseller" checked={bestseller===false} value="false" onChange={bestsellerHandler}/> No</label>
        </div>
      </div>
      <div>
        <label for="description">Description</label>
        <input type="text" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Enter the description' name="description"/>
      </div>
      <div>
        <label for="image">Image</label>
        <input type="file" id="image" onChange={(e)=>setFile(e.target.files[0])} name="image"/>
      </div>
      <button type="submit">Add Product</button>
    </form>}
  </div>
  )
}

export default AddProductForm