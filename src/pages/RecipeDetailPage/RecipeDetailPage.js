import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import * as recipeAPI from "../../utilities/recipes-api"

export default function RecipeDetailPage() {
    const [recipes, setRecipes] = useState([])
    // let recipesList
    // let userRecipes = []
    // const { recipeId } = useParams()

    const recipeInfo = useLocation()
    const { from } = recipeInfo.state
    console.log(from.id)

    useEffect(function () {
       
        async function getRecipes() {
            const recipes = await recipeAPI.show(from.id)
            setRecipes(recipes)
        }
        getRecipes()
        console.log(recipes)
    }, [])
    return(
        <>
        <h2>Recipe Detail Page</h2>
        <div className='detail-container'>
        <p>{recipes.title}</p>
        <p>{recipes.steps}</p>
        <p>{recipes.ingredients}</p>
        <p>{recipes.comments}</p>
        </div>
        </>
    )
}
