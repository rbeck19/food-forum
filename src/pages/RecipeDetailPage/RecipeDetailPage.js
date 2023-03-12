import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import * as recipeAPI from "../../utilities/recipes-api"
import RecipeDetailIngredient from '../../components/RecipeDetailIngredient/RecipeDetailIngredient'
import RecipeDetailStep from '../../components/RecipeDetailStep/RecipeDetailStep'


export default function RecipeDetailPage() {
    const [recipes, setRecipes] = useState("")
    // let recipesList
    // let userRecipes = []
    // const { recipeId } = useParams()

    const recipeInfo = useLocation()
    const { from } = recipeInfo.state
    console.log(from.id)
    console.log(from)

    useEffect(function () {
       
        async function getRecipes() {
            const recipes = await recipeAPI.show(from.id)
            console.log(recipes.ingredients)
            console.log(recipes.steps)
            setRecipes(recipes)
        }
        getRecipes()
        console.log(recipes)
    }, [])

    const recipeIngredient = recipes ?  recipes.ingredients.map((ingredient, index) => <RecipeDetailIngredient ingredient={ingredient} key={index}/>) : ""

    const recipeStep = recipes ? recipes.steps.map((step, index) => <RecipeDetailStep step={step} key={index} />) : ""

    return(
        <>
        <h2>Recipe Detail Page</h2>

        <div className='detail-container'>
            <h1>{recipes.title}</h1>
        </div>

        {recipes && recipeIngredient}
        {recipes && recipeStep}

        <p>{recipes.comments}</p>

        </>
    )
}
