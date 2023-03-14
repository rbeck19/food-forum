import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as recipeAPI from "../../utilities/recipes-api";
import * as commentAPI from "../../utilities/comment-api";
import RecipeDetailIngredient from "../../components/RecipeDetailIngredient/RecipeDetailIngredient";
import RecipeDetailStep from "../../components/RecipeDetailStep/RecipeDetailStep";
import Comment from "../../components/Comment/Comment";
import "./RecipeDetailPage.css"

export default function RecipeDetailPage({userId, userName}) {
  const [recipes, setRecipes] = useState("");
  const [comment, setComment] = useState("");
  const [note, setNote] = useState("");
  const [render, setRender] = useState(true)

  const recipeInfo = useLocation();
  const { from } = recipeInfo.state;

  useEffect(function () {
    async function getRecipes() {
      const recipes = await recipeAPI.show(from.id);
      setRecipes(recipes);
    }
    getRecipes();
  }, []);

  useEffect(function () {
    async function getComments() {
      const comments = await commentAPI.getComments();
      const result = comments.comments.filter(
        (comment) => comment.recipe === from.id
      );
      setComment(result);
    }
    getComments();
    setRender(true)
  }, [render]);



  async function handleDelete(commentId){
    try{
        await commentAPI.deleteComment(commentId)
        setRender(false)
    }catch(err){
        console.error(err)
    }
}


  const recipeIngredient = recipes
    ? recipes.ingredients.map((ingredient, index) => (
        <RecipeDetailIngredient ingredient={ingredient} key={index} />
      ))
    : "";

  const recipeStep = recipes
    ? recipes.steps.map((step, index) => (
        <RecipeDetailStep step={step} index={index} key={index} />
      ))
    : "";

  const comments = comment
    ? comment.map((comment, index) => <Comment comment={comment} key={index} userId={userId} userName={userName} handleDelete={handleDelete} />)
    : "";

    const handleChange = (event) => {
        setNote(event.target.value)
    }

    async function handleSubmit(){
        try {
            const newComment = {note, owner: userId, recipe: from.id}
            await commentAPI.createComment(newComment)
            setRender(false)
            setNote("")
        } catch(err){
            console.error(err)
        }
    }

  return (
    <>
      <h2>Recipe Detail Page</h2>

      <div className="main-container">

        <div className = "main-container-ingredients">
            <img className="recipe-img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGNlEfUupad2tsTTG6s7ym57Tq1nchq13SA&usqp=CAU" />

            
            <div className="recipe-engredient-container">
            <h2 className="ingredients-header">Ingredients</h2>
                {recipes && recipeIngredient}
            </div>
        </div>
      
        <div className = "main-container-steps">
            <div className="detail-container">
                <h1>{recipes.title}</h1>
            </div>

            <div className="recipe-steps-container">
                {recipes && recipeStep}
            </div>
        </div>

        
      </div>

      

      <div className = "create-comment-container">
        <textarea
            value={note}
            placeholder="Enter Comment Here"
            onChange={handleChange}
            className="new-comment-input"
        >
        </textarea>
        <button className="new-comment-submit button" onClick={handleSubmit}>
            Submit
        </button>
      </div>

      <div className="recipe-comments-container">
        {comment && comments}
      </div>

   
    </>
  );
}
