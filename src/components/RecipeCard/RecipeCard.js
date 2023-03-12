import { useNavigate } from 'react-router-dom'
//import { useEffect, useState } from "react"
// import '../../index.css'

export default function RecipeCard({ recipe }) {
    const navigate = useNavigate()

    function handleClick(){
        navigate('/recipe_details')
        //console.log('clicked')
    }

    // useEffect(() => {
    // })

    return (
            <div key={recipe.id}>
                <button className="recipe-card" onClick={handleClick}>{recipe.title}</button>
            </div>
    )
}