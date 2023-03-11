import { useEffect, useState } from "react"
import * as recipeAPI from "../../utilities/recipes-api"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import './MainPage.css';

export default function MainPage() {
    const [recipes, setRecipes] = useState([])
    let recipesList

    //get request to server to receive all recipe data

    useEffect(function() {
        async function getRecipes() {
            const recipes = await recipeAPI.getALL()
            setRecipes(recipes)
        }
        getRecipes()
    }, [])  //run on 1st render only

    //console.log(recipes)
    if (recipes.length !== 0){
        recipesList = recipes.recipes.map((recipe) =>(
            <div key={recipe.id}>
                <div className="recipe-card">{recipe.title}</div>
            </div>
    ))}

    return(
        <div className="main-page">
            <h2>Welcome to the Recipe Forum!</h2>
            <div className="recipes-container">
                {recipesList}
            </div>
            
        </div>
  
    )
}