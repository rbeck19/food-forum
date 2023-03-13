import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import AuthPage from "../AuthPage/AuthPage"
import NavBar from "../../components/NavBar/NavBar";
import MainPage from "../MainPage/MainPage"
import UserRecipes from "../UserRecipes/UserRecipes"
import CreatePage from "../CreatePage/CreatePage"
import RecipeDetailPage from "../RecipeDetailPage/RecipeDetailPage"
import UpdateForm from "../UpdateForm/UpdateForm"
import Footer from "../../components/Footer/Footer"
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
              <Route path="/recipe_details" element={<RecipeDetailPage userId={userId}/>} />
              <Route path="/recipe_create" element={<CreatePage userId={userId}/>} />
              <Route path="/update" element={<UpdateForm userId={userId}/>} />
              <Route path="/footer" element={<Footer/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}


