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
        }catch(error){
            alert('Error adding product')
            console.log(error);
        }
        setProductData({
            name: '',
            description: '',
            price: '',
            category: 'mobile',
            imageLink: '',
          });
    }
  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <input type="text" name='name' placeholder='Name of the Product' value={productData.name} onChange={handleOnChange}/>
            <input type="text" name='description' placeholder='description' value={productData.description} onChange={handleOnChange}/>
            <input type="number" name='price' placeholder='Price' value={productData.price} onChange={handleOnChange}/>
            <input type="text" name='image' placeholder='Image Link' value={productData.image} onChange={handleOnChange}/>
            <select name='category' value={productData.category} onChange={handleOnChange}>
                <option value="mobile">Mobile</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="books">Books</option>
            </select>
            <button type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default AddProducts