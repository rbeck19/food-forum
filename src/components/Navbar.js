import React from 'react';
import "./style.css";
import {NavLink, useNavigate} from "react-router-dom"


function Navbar () {
  const path = useNavigate()
  function Logout(){
    path('/login')
}

  return (
    <>
      <nav className="nav">
        <ul className="nav-main">
          <NavLink className="link" to='/'>
            Main
          </NavLink>
          <NavLink className="link" to='/recipes'>
            Recipe
          </NavLink>
          <NavLink className="link" to='/create-edit'>
            Create/Edit
          </NavLink>
          <button className="signin" onClick={Logout}>Logout</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;