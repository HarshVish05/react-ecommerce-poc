import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../../products.json'
import { Link, useLocation,useNavigate } from 'react-router-dom';
import styles from './cards.css'
import axios from 'axios'
import axiosInstance from '../../axios'



function Cards() {
  
  const location =  useLocation()
  const navigate = useNavigate()
  const [details,setDetails] = useState([])
 
  
  const selectedCategory = location.state?.category
  const fetchData = () =>{
    const product = axiosInstance.get(`${selectedCategory}`)
    // const product = axios.get(`http://localhost:5001/${selectedCategory}`)
    .then((res)=>(
      setDetails(res.data)
      ))
  }
  useEffect(()=>{
    fetchData()
    },[details])
    // const selectedProducts = details[selectedCategory] || []
    // console.log(details);
    
    
  const showDetails = (prod)=>{
    
    navigate("/details",{state:{prod,selectedCategory:location.state?.category}})
  }
  const handleDelete =  (index) =>{
    axiosInstance.delete(`${selectedCategory}/${index}`)

    // fetchData()
  }
  const isAdmin = localStorage.getItem('admin')==='true';
  return (
    <div className='container'>
    {details.map((value)=>{
      return <Card key = {value.id} style={styles.card}>
             <Card.Img variant="top" src={value.image} />
             <Card.Body>
               <Card.Title>{value.name}</Card.Title>
               <Card.Text>
                 Price: Rs {value.price}
               </Card.Text>
               
               <Button variant="primary" onClick={()=>showDetails(value.name)}>Details</Button><br/><br/>
               
               {isAdmin && (
               <Button variant="primary" onClick={()=>handleDelete(value.id)}>Delete</Button>
               )}
               
            </Card.Body>
           </Card>
    })}
    </div>
  );
}

export default Cards;
