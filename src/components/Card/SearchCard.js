import React, { useEffect, useState } from 'react'
import styles from './cards.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
import axiosInstance from '../../axios'

const SearchCard = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [productList,setProductList] = useState([]);
    const searchProd = location.state?.searchTerm.toLowerCase()
    useEffect(()=>{
      const response1 =  axiosInstance.get(`/mobile`)
      const response2 =  axiosInstance.get(`/electronics`)
      const response3 =  axiosInstance.get(`/fashion`)
      const response4 =  axiosInstance.get(`/books`)

      axios.all([response1,response2,response3,response4])
      .then(axios.spread((...responses)=>{
        // console.log(responses);
        // const allresponses = responses.map(response=>response.data)
        // console.log(allresponses);
        const allresponses = responses.map(response=>response.data).flat()
        setProductList(allresponses)
      }))
      
    },[])
    
    const products = productList.filter((productName)=>{
        
        return productName.name.toLowerCase().includes(searchProd)
    })

    const showDetails = (prod)=>{
   
        navigate("/details",{state:{prod}})
      }

  return (
    <div className='container'>
        {products.map((value)=>(
            <Card key = {value.id} style={styles.card}>
            <Card.Img variant="top" src={value.image} />
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Text>
                Price: Rs {value.price}
              </Card.Text>
              
              <Button variant="primary" onClick={()=>showDetails(value)}>Details</Button>
              
           </Card.Body>
          </Card>
        ))}
    </div>
    
  )
}

export default SearchCard