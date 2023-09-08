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
    const [productList,setProductList] = useState([]);
    const searchProd = location.state?.searchTerm.toLowerCase()
    useEffect(()=>{
      const response1 =  axios.get(`http://localhost:5001/mobile`)
      const response2 =  axios.get(`http://localhost:5001/electronics`)
      const response3 =  axios.get(`http://localhost:5001/fashion`)
      const response4 =  axios.get(`http://localhost:5001/books`)

      axios.all([response1,response2,response3,response4])
      .then(axios.spread((...responses)=>{
        const allresponses = responses.map(response=>response.data).flat()
        setProductList(allresponses)
      }))
      
      // const productsData = response.data
      
      // const allProducts = Object.values(productsData).flat()
      // setProductList(allProducts)
      
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
    // <div className='container'>
    //     {products.map((value)=>(
    //         <Card key = {details[value].id} style={styles.card}>
    //         <Card.Img variant="top" src={details[value].image} />
    //         <Card.Body>
    //           <Card.Title>{details[value].name}</Card.Title>
    //           <Card.Text>
    //             Price: Rs {details[value].price}
    //           </Card.Text>
              
    //           <Button variant="primary" onClick={()=>showDetails(value)}>Details</Button>
              
    //        </Card.Body>
    //       </Card>
    //     ))}
    // </div>
  )
}

export default SearchCard