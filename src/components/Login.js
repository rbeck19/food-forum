import React, { useState } from "react"
//import logo from './logo.svg';
import './style.css';
import {useNavigate} from "react-router-dom"

function Login() {
    const path = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function Signup(){
        path('/sign-up')
    }

    const handleSubmit= (e) =>{
        e.preventDefault()
    }
  return (
    <div>
      <form on onSubmit={(e)=> handleSubmit(e)}>
       <label htmlFor="username">Username</label>
       <input
         type="text"
         placeholder="Username"
         id="username"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         />
         <label htmlFor="password">Password</label>
         <input
          type="password"
          placeholder="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          />

          <button className="notamember" onClick={Signup}>Not a member</button>
          <button type="submit" className="sign-in">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
