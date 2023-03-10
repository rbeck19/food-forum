import React, { useState } from "react";
//import logo from './logo.svg';
import "./style.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import * as usersService from "../utilities/users-service";

function Login({ setUser }) {
  const path = useNavigate();
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const [error, setError] = useState("");

  function Signup() {
    path("/sign-up");
  }

  // const handleSubmit= (e) =>{
  //     e.preventDefault()
  //     props.setUser(email, password);
  //     path('/')
  // }

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div className="main">
      <div className="title">Recipe Food Forum</div>

      <form on onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          //  onChange={(e) => setEmail(e.target.value)}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          // onChange={(e) => setPassword(e.target.value)}
          onChange={handleChange}
        />
        

        <button className="notamember" onClick={Signup}>
          Not a member
        </button>
        <button type="submit" className="signin">
          Log In
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
