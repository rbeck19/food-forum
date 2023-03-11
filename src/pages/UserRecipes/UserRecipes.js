import { useEffect, useState } from "react"
import * as recipeAPI from "../../utilities/recipes-api"
import { getUserInfo } from "../../utilities/users-service"
import { Link } from "react-router-dom"

export default function UserRecipes({ userId }) {
    const [recipes, setRecipes] = useState([])
    let recipesList
    let userRecipes = []

    //get all recipes
    useEffect(function () {
        async function getRecipes() {
            const recipes = await recipeAPI.getALL()
            setRecipes(recipes)
        }
        getRecipes()
    }, [])

    if (recipes.length !== 0 && recipes.recipes !== undefined) {
        recipes.recipes.forEach(function (recipe) {
            if (recipe.owner == userId) {
                userRecipes.push(recipe)
            }
        })
        console.log(userRecipes)
        if (userRecipes.length !== 0){
            recipesList = userRecipes.map((recipe) =>(
                <div key={recipe.id}>
                    <div className="recipe-card">{recipe.title}</div>
                </div>
            ))
        }
    }

    return (
        <div className="main-page">
            <h2>Your Recipes!</h2>
            <div className="recipes-container">
                {recipesList}
            </div>
            <Link to="/recipe_create">+</Link>
        </div>

    )
}