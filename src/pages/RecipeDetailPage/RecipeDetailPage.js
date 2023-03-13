import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as recipeAPI from "../../utilities/recipes-api";
import * as commentAPI from "../../utilities/comment-api";
import RecipeDetailIngredient from "../../components/RecipeDetailIngredient/RecipeDetailIngredient";
import RecipeDetailStep from "../../components/RecipeDetailStep/RecipeDetailStep";
import Comment from "../../components/Comment/Comment";

export default function RecipeDetailPage({userId}) {
  const [recipes, setRecipes] = useState("");
  const [comment, setComment] = useState("");
  const [note, setNote] = useState("");
  const [render, setRender] = useState(true)

  const recipeInfo = useLocation();
  const { from } = recipeInfo.state;

  useEffect(function () {
    async function getRecipes() {
      const recipes = await recipeAPI.show(from.id);
      console.log(recipes.ingredients);
      console.log(recipes.steps);
      setRecipes(recipes);
    }
    getRecipes();
    console.log(recipes);
  }, []);

  useEffect(function () {
    async function getComments() {
      const comments = await commentAPI.getComments();
      console.log(from.id);
      console.log(comments);
      const result = comments.comments.filter(
        (comment) => comment.recipe === from.id
      );
      setComment(result);
      console.log(comment);
      console.log(result);
    }
    getComments();
    console.log(comment);
    setRender(true)
  }, [render]);



  async function handleDelete(commentId){
    try{
        await commentAPI.deleteComment(commentId)
        setRender(false)
    }catch(err){
        console.log(err)
    }
}


  const recipeIngredient = recipes
    ? recipes.ingredients.map((ingredient, index) => (
        <RecipeDetailIngredient ingredient={ingredient} key={index} />
      ))
    : "";

  const recipeStep = recipes
    ? recipes.steps.map((step, index) => (
        <RecipeDetailStep step={step} key={index} />
      ))
    : "";

  const comments = comment
    ? comment.map((comment, index) => <Comment comment={comment} key={index} userId={userId}  handleDelete={handleDelete} />)
    : "";

    const handleChange = (event) => {
        setNote(event.target.value)
        console.log(note)
        console.log(userId)
        console.log(from.id)
    }

    async function handleSubmit(){
        try {
            const newComment = {note, owner: userId, recipe: from.id}
            await commentAPI.createComment(newComment)
            setRender(false)
            setNote("")
            // const post = await postAPI.show(recipeId)
        } catch(err){
            console.error(err)
        }
    }

  return (
    <>
      <h2>Recipe Detail Page</h2>

      <div className="detail-container">
        <h1>{recipes.title}</h1>
      </div>

      {recipes && recipeIngredient}
      {recipes && recipeStep}
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
      {comment && comments}

   
    </>
  );
}
