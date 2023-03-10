//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Login from "./components/Login";
import Signup from "./components/Signup"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Recipe from "./components/Recipe"
import CreateEdit from "./components/CreateEdit"
import Footer from "./components/Footer"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
      <Routes>
      <Route exact path='/navbar' element={<Navbar/>}/>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/login' element={<Login setUser={setUser}/>}/>
      <Route exact path='/sign-up' element={<Signup setUser={setUser}/>}/>
      <Route exact path='/create-edit' element={<CreateEdit/>}/>
      <Route exact path='/recipes' element={<Recipe/>}/>
      <Route exact path='/footer' element={<Footer/>}/>
     </Routes>
      </Router>
    </div>
  );
}

export default App;
