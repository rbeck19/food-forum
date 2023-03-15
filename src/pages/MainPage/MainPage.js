import { useEffect, useState } from "react"
import * as recipeAPI from "../../utilities/recipes-api"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import Footer from "../../components/Footer/Footer"
import '../../index.css';

export default function MainPage() {
    const [recipes, setRecipes] = useState(null)
    //let recipesList
    //get request to server to receive all recipe data

    useEffect(function () {
        async function getRecipes() {
            const recipes = await recipeAPI.getALL()
            setRecipes(recipes)
        }
        getRecipes()
    }, [])  //run on 1st render only


    const recipeList = recipes ? recipes.recipes.map((recipe, index) => <RecipeCard recipe={recipe} key={index} />) : ""

    return (
        <div className="main-page">
            <div className="head-container">
                <div className="page-header">Welcome to the Recipe Forum!</div>
            </div>
            <div className="recipes-container">
                {recipes && recipeList}
            </div>

        </div>
    )
}