import React, { useEffect, useState } from 'react'
import { Api_Path } from '../Data/API_path'

const AllProducts = () => {

    const[products,setProducts] = useState([])

const ShowProductHandler = async()=>{
try {
    const firmId = localStorage.getItem('firmId')
    if(!firmId){
        console.log("firmId is required")
    }

    const response = await fetch(`${Api_Path}/product/${firmId}/all-products`)
    const data = await response.json()
    console.log(data.products)
    setProducts(data.products)
    
} catch (error) {

    console.log("failed to fetch products")
    alert("failed to fetch products")
    
}


} 

useEffect(()=>{
    ShowProductHandler()
},[])


const deleteProduct = async(ProductId)=>{
    try {
        const response = await fetch(`${Api_Path}/product/deleteproduct/${ProductId}`,{
            method:"DELETE"
        })
        if (response.ok) {
            setProducts(products.filter((product) => product._id !== ProductId))
            alert("Product deleted successfully")
          }
        
    } catch (error) {
        console.log(error)
        
    }

}




  return (
    <div>{!products ?<p style={{ marginLeft: '30px', fontSize: "24px", marginTop: "30px" }}>No Products</p>:(<table className='product-table'>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>{item.productname}</td>
              <td>{item.price}</td>
              <td>{item.image && (
                <img src={`${Api_Path}/uploads/${item.image}`} alt={item.productname} style={{ width: "70px", height: "70px" }} />
              )}</td>
              <td>
                <button onClick={() => deleteProduct(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>)}</div>
  )
}

export default AllProducts