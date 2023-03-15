import { useEffect, useState } from "react";
import * as recipeAPI from "../../utilities/recipes-api";
import { useNavigate } from "react-router-dom";

export default function UserRecipes({ userId }) {
    const [recipes, setRecipes] = useState([]);
    const [render, setRender] = useState(true)
    const navigate = useNavigate();
    let recipesList;
    let userRecipes = [];

    //Delete on button click
    async function handleDelete(recipeId) {
        setRender(false)
        //Remove from DB
        await recipeAPI.remove(recipeId);
    }

    function handleEditRoute(recipe) {
        navigate("/update", { state: { from: recipe } })
    }
    function handleRecipeRoute(recipe) {
        
        navigate("/recipe_details", { state: { from: recipe } })
    }
    //get all recipes
    useEffect(function () {
        async function getRecipes() {
            const recipes = await recipeAPI.getALL();
            setRecipes(recipes);
        }
        getRecipes();
        setRender(true)
    }, [render]);

    if (recipes.length !== 0 && recipes.recipes !== undefined) {
        recipes.recipes.forEach(function (recipe) {
            if (recipe.owner == userId) {
                userRecipes.push(recipe);
            }
        });
        if (userRecipes.length !== 0) {
            recipesList = userRecipes.map((recipe, index) => (
                <div key={index} className="user-recipe-holder">
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
                    <div className="card-buttons-container">
                        <button className="update-button" onClick={() => handleEditRoute(recipe)}>Edit</button>
                        <button className="delete-button" onClick={() => handleDelete(recipe.id)}>Delete</button>
                    </div>
                </div>
            ));
        }
    }

    function handleClick() {
        navigate("/recipe_create")
    }

    return (
        <div className="main-page">
            <div className="head-container">
                <div className="page-header">Here is your Recipes!</div>
            </div>
            <div className="recipes-container">
                {recipesList}
                <div className="recipe-card-container-plus">
                    <div className="recipe-card-plus" onClick={handleClick}>
                        <div className="plus-rotate">&#x2715;</div>
                    </div>
                    <div className="recipe-card-plus-caption">Add a Recipe</div>
                </div>
            </div>

        </div>
    );
}
