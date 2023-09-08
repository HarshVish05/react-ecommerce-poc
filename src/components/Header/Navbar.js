import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/search", { state: { searchTerm } });
  };

  const showCart = () => {
    navigate('/cart')
  }
  const logout = () => {
    localStorage.removeItem('login')
    localStorage.removeItem('admin')
    navigate('/login');
  }

  const isLoggedIn = localStorage.getItem('login')==='true';
  return (
    
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="link" to="/">LeloKart</Link>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="link" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href=""></a> */}
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              value={searchTerm}
              onChange={(event) => {
                setsearchTerm(event.target.value);
              }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success button"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
          <div>
            <BsCart className="shoppingCart" onClick={showCart} />
          </div>
          {isLoggedIn && (

          <button
              className="btn btn-outline-success button logout"
              onClick={logout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
