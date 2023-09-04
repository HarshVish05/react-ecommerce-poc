import React, { useEffect, useState } from 'react'
import styles from './cards.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation,useNavigate } from 'react-router-dom'
import details from '../../details.json'
import axios from 'axios'

const SearchCard = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const searchProd = location.state?.searchTerm.toLowerCase()
    // useEffect(()=>{
    //   axios.get()
    // },[])
    
    const products = Object.keys(details).filter((productName)=>{
        
        return productName.toLowerCase().includes(searchProd)
    })

    const showDetails = (prod)=>{
   
        navigate("/details",{state:{prod}})
      }
  return (
    <div className='container'>
        {products.map((value)=>(
            <Card key = {details[value].id} style={styles.card}>
            <Card.Img variant="top" src={details[value].image} />
            <Card.Body>
              <Card.Title>{details[value].name}</Card.Title>
              <Card.Text>
                Price: Rs {details[value].price}
              </Card.Text>
              
              <Button variant="primary" onClick={()=>showDetails(value)}>Details</Button>
              
           </Card.Body>
          </Card>
        ))}
    </div>
  )
}

export default SearchCard