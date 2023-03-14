import React from 'react'
import { useState } from 'react'
import * as recipeAPI from "../../utilities/recipes-api"
import { useNavigate } from "react-router-dom"
import Axios from "axios"
import {Image} from "cloudinary-react"
import Input from "./Input"

export default function CreatePage({ userId }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [formValues, setFormValues] = useState([{ type: 'text', value: '' }]);
  const [formStepsValues, setFormStepsValues] = useState([{ type: 'text', value: '' }]);
  const [image, setImage] = useState(null)
  const placeholderIngredient = 'Add an Ingredient'
  const placeholderStep = 'Add a Step'

  const navigate = useNavigate()
  //--------
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }
  //---------

  const uploadImage = (files) => {
    console.log(files[0])
    const formData = new FormData()
    formData.append("file", files[0])
    formData.append("upload_preset", process.env.REACT_APP_PASSWORD)

    Axios.post("https://api.cloudinary.com/v1_1/dhjlwaryv/image/upload", formData) 
    .then((res) => setImage(res.data.url)) 
  }


  // ---------Ingredients
  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index].value = e.target.value;
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
    values[index].value = e.target.value;
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


      const ingredients = formValues.map((val) => { return val.value })
      const steps = formStepsValues.map((val) => { return val.value })


      const recipeData = { title, description, ingredients, steps, image, owner: userId }

      await recipeAPI.create(recipeData)
      navigate('/user_recipes')
      return recipeData
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className='create-container'>
      <form className='create-recipe-form' onSubmit={handleSubmit}>
        <h2 className='new-recipe-title'>Create New Recipe</h2>
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
              <textarea id='description-input'
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
                  formValues={formValues}
                  placeholder = {placeholderIngredient}
                />
              ))}
              <button className='create-page-buttons' onClick={handleAddField}>
                Add ingredient
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
                  formStepsValues={formStepsValues}
                  placeholder = {placeholderStep}
                />
              ))}
              <button className='create-page-buttons' onClick={handleStepAddField}>
                Add Step
              </button>
            </div>

            <div className='recipe-title-container'>

            <input type="file" name="image" accept="image/png, image/jpeg" onChange={(event) => {uploadImage(event.target.files)}}/>

            </div>

          </div>
        </div>
        <div className='create-container'>
          <button type="submit" className='create-recipe-button'>
            Submit
          </button></div>
      </form>
        <Image style={{width:200}}cloudName="dhjlwaryv" publicId={image} />
    </div>
  )
}



// https://www.telerik.com/blogs/how-to-programmatically-add-input-fields-react-forms
//adding field inputs from above source