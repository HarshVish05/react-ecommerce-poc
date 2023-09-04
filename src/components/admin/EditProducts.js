import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const EditProducts = ({ productId }) => {
  const [product, setProduct] = useState({});
  const [updatedProduct, setUpdatedProduct] = useState({});
//   const [prod, setProd] = useState('');
  const location = useLocation();
  const navigate = useNavigate()
  const prodId = location.state?.productId;
  const selectedCategory = location.state?.category;

  useEffect(() => {
    // Fetch the product details by productId
    axios.get(`http://localhost:5001/${selectedCategory}/${prodId}`)
      .then((response) => {
        setProduct(response.data);
        // Initialize the updatedProduct with the current details
        setUpdatedProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details: ', error);
      });
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the updatedProduct object with the new input value
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });
  };

  const handleUpdateProduct = () => {
    // Send a PUT request to update the product details
    axios.put(`http://localhost:5001/${selectedCategory}/${prodId}`, updatedProduct)
      .then((response) => {
        console.log('Product updated successfully: ', response.data);
        console.log(response.data.name);
        // setProd(response.data.name);
        //   navigate("/details",{state:{prod,selectedCategory:location.state?.category}})
    })
    .catch((error) => {
        console.error('Error updating product: ', error);
    });
    alert("Product updated successfully")
    navigate('/details',{state:{selectedCategory,prod:updatedProduct.name}});

};
// useEffect(() => {
//     if (prod !== '') {
//         console.log(prod); 
//     //   alert("Product updated successfully");
//     }
//   }, [prod]);

  return (
    <div>
      <h2>Edit Product</h2>
      <form>
        <input
          type="text"
          name="name"
          value={updatedProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          value={updatedProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          value={updatedProduct.price}
          onChange={handleInputChange}
        />
        {/* Add more input fields for other product details */}
      </form>
      <button onClick={handleUpdateProduct}>Save Changes</button>
    </div>
  );
};

export default EditProducts;