import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import CarouselComp from './components/Carousel/CarouselComp';
import Cards from './components/Card/Cards';
import { BrowserRouter,Routes, Route, Navigate  } from 'react-router-dom';
import { useState } from 'react';
import ProductDetails from './components/Details/ProductDetails';
import Cart from './components/Shopping Cart/Cart';
import SearchCard from './components/Card/SearchCard';
import Login from './components/Login/Login';
import Protected from './components/auth/Protected';
import Registration from './components/Register/Registration';
import AddProducts from './components/admin/AddProducts';
import EditProducts from './components/admin/EditProducts';

function App() {
  const [category, setSelectedCategory] = useState('');
  const isAdmin = localStorage.getItem('admin')

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Registration/>}/>
      {isAdmin ?(
        <>
      <Route  path="/addProducts" element={<Protected><AddProducts /></Protected>} />
      <Route  path="/editDetails" element={<Protected><EditProducts /></Protected>} />
      </>
      )
      : (
        <>
        <Route  path="/addProducts" element={<Navigate to="/"/>} />
        <Route  path="/editDetails" element={<Navigate to="/"/>} />
        </>
        )
      
    }
      <Route path="/" element={<Protected> <CarouselComp/> </Protected>}/>
      {/* <Route path="/" element={<CarouselComp />}/> */}
      <Route path="/more" element={<Protected> <Cards selectedCategory={category}/></Protected>}/>
      <Route path="/details" element={<Protected> <ProductDetails/></Protected>}/>
      <Route path='/cart' element={<Protected> <Cart/> </Protected>}/>
      <Route path='/search' element={<Protected><SearchCard/></Protected>}/>
      </Routes>
    
      <Footer/>
      </BrowserRouter>
      {/* <Login/> */}
    </div>
  );
}

export default App;
