import { useEffect, useState } from "react";
import * as recipeAPI from "../../utilities/recipes-api";
import { useNavigate, Link } from "react-router-dom";
import { getUserInfo } from "../../utilities/users-service";
import RecipeCard from "../../components/RecipeCard/RecipeCard";


export default function UserRecipes({ userId }) {
    const [recipes, setRecipes] = useState([]);
    const [render, setRender] = useState(true)
    const navigate = useNavigate();
    let recipesList;
    let userRecipes = [];

    //Delete on button click
    async function handleDelete(recipeId) {
        console.log("hi");
        console.log(recipeId);
        setRender(false)
        //Remove from DB
        await recipeAPI.remove(recipeId);

        console.log(recipes);
    }

    function handleEditRoute(recipe){
        navigate("/update", { state: {from: recipe}})
    }
    function handleRecipeRoute(recipe){
        navigate("/recipe_details", { state: {from: recipe}})
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
        console.log(userRecipes);
        if (userRecipes.length !== 0) {
            recipesList = userRecipes.map((recipe) => (
                <div>
                    {/* <Link to='/update' state={{ from: recipe }}> */}
                    <div key={recipe.id} className="recipe-card" onClick={() => handleRecipeRoute(recipe)}>{recipe.title}</div>
                     {/* </Link> */}
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
        //console.log('clicked')
    }

    return (
        <div className="main-page">
            <h2>Your Recipes!</h2>
            <div className="recipes-container">
                {recipesList}
                <div className="recipe-card-plus" onClick={handleClick}>
                    +
                </div>
            </div>
        </div>
    );
}
