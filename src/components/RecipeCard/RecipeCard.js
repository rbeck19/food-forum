export default function RecipeCard({ recipe }) {
    return (
        <div>
            <div key={recipe.id}>
                <div className="recipe-card">{recipe.title}</div>
            </div>
        </div>
    )
}