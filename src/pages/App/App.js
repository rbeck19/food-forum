import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import AuthPage from "../AuthPage/AuthPage"
import NavBar from "../../components/NavBar/NavBar";
import MainPage from "../MainPage/MainPage"
import RecipeDetailPage from "../RecipeDetailPage/RecipeDetailPage"
import './App.css';

import { getUser } from "../../utilities/users-service"

export default function App() {

      //getUser will insert token if there is one in local storage 
      //otherwise it will be a value of "null"
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes >
            <Route path="/main" element={<MainPage />} />
            <Route path="/detail" element={<RecipeDetailPage />} />
          </Routes> 
        </> 
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


