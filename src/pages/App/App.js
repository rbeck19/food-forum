import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import AuthPage from "../AuthPage/AuthPage"
import NavBar from "../../components/NavBar/NavBar";
import MainPage from "../MainPage/MainPage"
import UserRecipes from "../UserRecipes/UserRecipes"
import RecipeDetailPage from "../RecipeDetailPage/RecipeDetailPage"
import './App.css';

import { getUser, getUserInfo } from "../../utilities/users-service"

export default function App() {

  const [user, setUser] = useState(getUser())
  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    setUserName(getUserInfo("userName"))
    setUserId(getUserInfo("userId"))
  })
  
  return (
    <main className="App">
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} userName={userName}
              setUserName={setUserName} />
            <Routes >
              <Route path="/" element={<MainPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/user_recipes" element={<UserRecipes userId={userId}/>} />
              <Route path="/recipe_details" element={<RecipeDetailPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}


