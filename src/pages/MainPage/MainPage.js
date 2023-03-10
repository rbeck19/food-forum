import { useEffect, useState } from "react"
import * as recipeAPI from "../../utilities/recipes-api"

export default function NewOrderPage() {
    const [recipes, setRecipes] = useState([])
    

    //get request to server to receive all recipe data

    useEffect(function() {
        async function getRecipes() {
            const recipes = await recipeAPI.getALL()
            setRecipes(recipes)
        }
        getRecipes()
    }, [])  //run on 1st render only


    return(
        <h2>Main Page</h2>
    )
}