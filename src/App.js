import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import CarouselComp from './components/Carousel/CarouselComp';
import Cards from './components/Card/Cards';
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import { useState } from 'react';
import ProductDetails from './components/Details/ProductDetails';
import Cart from './components/Shopping Cart/Cart';
import SearchCard from './components/Card/SearchCard';

function App() {
  const [category, setSelectedCategory] = useState('');
  // const showMore = (category) => {
  //   console.log("clicked from app");
  //   setSelectedCategory(category);
  //   console.log(category);
    
  // };
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<CarouselComp />}/>
      {/* <Route path="/more" element={<Cards />}/> */}
      <Route path="/more" element={<Cards selectedCategory={category}/>}/>
      <Route path="/details" element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/search' element={<SearchCard/>}/>
      </Routes>
    
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
