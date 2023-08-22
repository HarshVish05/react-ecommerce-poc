import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../../products.json'
import { Link, useLocation,useNavigate } from 'react-router-dom';
import styles from './cards.css'



function Cards() {
  // console.log(props.selectedCategory);
  const location =  useLocation()
  const navigate = useNavigate()
  const [details,setDetails] = useState(product)
  // const [product,setProduct] = useState()
  
  const selectedCategory = location.state?.category
  const selectedProducts = details[selectedCategory] || []
  const showDetails = (prod)=>{
   
    navigate("/details",{state:{prod}})
  }
  return (
    <div className='container'>
    {selectedProducts.map(value=>{
      return <Card key = {value.id} style={styles.card}>
             <Card.Img variant="top" src={value.image} />
             <Card.Body>
               <Card.Title>{value.name}</Card.Title>
               <Card.Text>
                 Price: Rs {value.price}
               </Card.Text>
               
               <Button variant="primary" onClick={()=>showDetails(value.name)}>Details</Button>
               
            </Card.Body>
           </Card>
    })}
    </div>
  );
}

export default Cards;
