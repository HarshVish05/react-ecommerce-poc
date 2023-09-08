import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddProducts = () => {
    const [productData,setProductData] = useState({
        name:'',
        description:'',
        price:'',
        image:'',
        category:'mobile'

    })

    const handleOnChange = (e) =>{
        const {name,value} = e.target;
        setProductData({
            ...productData,
            [name]: value
        })
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        try{
            axios.post(`http://localhost:5001/${productData.category}`,productData)
            alert("Product added successfully")
        }catch(error){
            alert('Error adding product')
            console.log(error);
        }
        setProductData({
            name: '',
            description: '',
            price: '',
            category: 'mobile',
            image: '',
          });
    }
  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <input type="text" name='name' placeholder='Name of the Product' value={productData.name} onChange={handleOnChange}/><br /><br />
            <input type="text" name='description' placeholder='description' value={productData.description} onChange={handleOnChange}/><br /><br />
            <input type="number" name='price' placeholder='Price' value={productData.price} onChange={handleOnChange}/><br /><br />
            <input type="text" name='image' placeholder='Image Link' value={productData.image} onChange={handleOnChange}/><br /><br />
            <select name='category' value={productData.category} onChange={handleOnChange}>
                <option value="mobile">Mobile</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="books">Books</option>
            </select><br /><br />
            <button type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default AddProducts