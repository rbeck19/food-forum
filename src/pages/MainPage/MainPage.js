import { useEffect, useState } from "react"
import * as recipeAPI from "../../utilities/recipes-api"

import RecipeCard from "../../components/RecipeCard/RecipeCard"

export default function MainPage() {
    const [recipes, setRecipes] = useState([])
    

    //get request to server to receive all recipe data

    useEffect(function() {
        async function getRecipes() {
            const recipes = await recipeAPI.getALL()
            setRecipes(recipes)
        }
        getRecipes()
    }, [])  //run on 1st render only

 
    //console.log(recipes)
    //console.log(recipes.recipes[0].title)

    //const recipeList = recipes.recipes.map((recipe, index) => <RecipeCard recipe={recipe} key={index} />)

    return(
        <>
            <h2>Main Page</h2>
        
            
        </>
  
    )
}