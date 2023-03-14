import {  Link } from 'react-router-dom'


export default function RecipeCard({ recipe }) {


    return (
            <div key={recipe.id}>
                <Link to='/recipe_details' state={{ from: recipe}} className="recipe-card" >{recipe.title}<p className='recipe-description'>{recipe.description}</p></Link>
            </div>
    )
}