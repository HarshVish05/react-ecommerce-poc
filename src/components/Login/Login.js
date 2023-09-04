import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate,Link } from "react-router-dom";
// import users from '../../../user.json'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const login = () =>{
    users.map((user)=>{
      if(user.username === userName && user.password === password){
        localStorage.setItem('login',true)
        if(user.role === 'admin'){
          localStorage.setItem('admin',true)
        }
        navigate('/')
      }
      // else{
      //   alert('User is not registered')
      // }
      })
    }
    const [users,setusers] = useState([])
  useEffect(()=>{
        const data = axios.get('http://localhost:5000/credentials')
        .then((res)=>{
            setusers(res.data)
        })
    },[])
  useEffect(()=>{
    let login = localStorage.getItem('login')
    if(login){
      navigate('/')
    }
  })
  return (
    
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>LeloKart</h1>
            <p>
            Get access to your Orders, Wishlist and Recommendations
            Happy Shopping
            </p>
            <span>
              <p>login with social media</p>
              <a href="/">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="/">
                <i className="fa fa-twitter" aria-hidden="true"></i> Login with
                Twitter
              </a>
            </span>
          </div>
        </div>

        <div className="right">
          <h5>Login</h5>
          <p className="registration">
            Don't have an account? 
            <Link to='/register'>
            <a href="">Create Your Account</a>
            </Link> it takes
            less than a minute
          </p>
          <div className="inputs">
            <input type="text" placeholder="user name" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            <br />
            <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          </div>

          <br />
          <br />

          <div className="remember-me--forget-password">
            <label>
              <input type="checkbox" name="item" checked />
              <span className="text-checkbox">Remember me</span>
            </label>
            <p>forget password?</p>
          </div>

          <br />
          <button onClick={login}>Login</button>
        </div>
      </div>
    
  );
};

export default Login;
