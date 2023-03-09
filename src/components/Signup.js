import React, { useState } from "react"
import {useNavigate} from "react-router-dom"
import './style.css';

function Signup(props) {
    const path = useNavigate()

    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setData({
            ...data, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit= (e) =>{
        e.preventDefault()
        props.setUser(data);
        path('/')
    }

    function Signin(){
        path('/login')
    }
  return (
    <div className="main">
     <div className="title">Recipe Food Forum</div>
     <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">username</label>
        <input
         type="username"
         placeholder="username"
         id="username"
         name="username"
         onChange={handleChange}
         />
         <label htmlFor="password">Password</label>
         <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={handleChange}
          />
        <label htmlFor="email">Email</label>
         <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          onChange={handleChange}
          />

    <button type="submit" className="signup">Signup</button>
    <button className="signin" onClick={Signin}>Sign In</button>
    </form>
    </div>
  );
}

export default Signup;
