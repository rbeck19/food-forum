import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import * as recipeAPI from "../../utilities/recipes-api"
import Input from "./Input"


export default function UpdateForm({ userId }) {

  const recipeInfo = useLocation()
  const { from } = recipeInfo.state
  const placeholderIngredient = 'Add an Ingredient'
  const placeholderStep = 'Add a Step'

  const navigate = useNavigate()

  const [title, setTitle] = useState(from.title)
  const [description, setDescription] = useState(from.description)
  const [formValues, setFormValues] = useState(from.ingredients);
  const [formStepsValues, setFormStepsValues] = useState(from.steps);



  //--------
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }
  //---------

  // ---------Ingredients
  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index] = e.target.value;
    setFormValues(values);
  };
  const handleAddField = (e) => {
    e.preventDefault();
    const values = [...formValues];
    values.push({
      type: "text",
      value: "",
    });
    setFormValues(values);
  };
  const handleDeleteField = (e, index) => {
    const values = [...formValues];
    values.splice(index, 1);
    setFormValues(values);
  };
  //---------


  //-------Steps
  const handleStepChange = (e, index) => {
    const values = [...formStepsValues];
    values[index] = e.target.value;
    setFormStepsValues(values);
  };
  const handleStepAddField = (e) => {
    e.preventDefault();
    const values = [...formStepsValues];
    values.push({
      type: "text",
      value: "",
    });
    setFormStepsValues(values);
  };
  const handleStepDeleteField = (e, index) => {
    const values = [...formStepsValues];
    values.splice(index, 1);
    setFormStepsValues(values);
  };
  //---------


  async function handleSubmit(event) {
    try {
      event.preventDefault()


      const ingredients = formValues
      const steps = formStepsValues


      const recipeData = { title, description, ingredients, steps, owner: userId }

      await recipeAPI.update(from.id, recipeData)
      navigate('/user_recipes')
      return recipeData
    } catch (err) {
      console.error(err)
    }
  }



  return (
    <div className='create-container'>
      <form className='create-recipe-form' onSubmit={handleSubmit}>
        <h2 className='new-recipe-title'>Update Your Recipe</h2>
        <div className='create-flexbox'>
          <div className='create-left-grid'>
            <div className='recipe-title-container'>
              <label className='create-page-labels'>Recipe Title</label>
              <input id='recipe-title-input' className='create-inputs'
                type='text'
                name='title'
                value={title}
                onChange={handleTitleChange}
                placeholder="Title"
              ></input>
            </div>
            <div className='recipe-description-container'>
            <label className='create-page-labels'>Description</label>
              <textarea
                type='text'
                name='description'
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Description"
              ></textarea>
            </div>
            <div className='recipe-ingredients-container'>
              <label className='create-page-labels'>Ingredients</label>
              {formValues.map((obj, index) => (
                <Input
                  key={index}
                  objValue={obj}
                  onChange={handleChange}
                  index={index}
                  deleteField={handleDeleteField}
                  placeholder = {placeholderIngredient}
                />
              ))}
              <button className='create-page-buttons' onClick={handleAddField}>
                Add Ingredient
              </button>
            </div>
          </div>
          <div className='create-right-grid'>
            <div id='steps-container'>
              <label className='create-page-labels'>Steps</label>
              {formStepsValues.map((obj, index) => (
                <Input
                  key={index}
                  objValue={obj}
                  onChange={handleStepChange}
                  index={index}
                  deleteField={handleStepDeleteField}
                  placeholder = {placeholderStep}
                />
              ))}
                <button className='create-page-buttons' onClick={handleStepAddField}>
                  Add Step
                </button>
            </div>
            


          </div>
        </div>
        <div className='create-container'>
              <button className='create-recipe-button' type="submit">
                Update
              </button>
            </div>
      </form>
    </div >
  )
}