import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
    const navigate = useNavigate();

    function handleRecipeRoute() {
        navigate("/recipe_details", { state: { from: recipe } })
    }

    return (
        <div className="recipe-card-container">
            <div key={recipe.id} className="recipe-card"
                style={{
                    backgroundImage: `url(${recipe.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                onClick={() => handleRecipeRoute(recipe)} >
            </div>
            <div className="recipe-card-title">{recipe.title}</div>
        </div>
    )
}