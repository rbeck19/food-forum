import React from 'react'
import { useState } from 'react'
import * as recipeAPI from "../../utilities/recipes-api"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Input from "./Input"
import "./CreatePage.css"

export default function CreatePage({userId}){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [formValues, setFormValues] = useState([]);
    const [formStepsValues, setFormStepsValues] = useState([]);

    const navigate = useNavigate()

    //--------
    const handleTitleChange = (event) => {
        setTitle (event.target.value)
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }
    //---------

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

            console.log(title)
            console.log(description)
            console.log(
              formValues.map((val) => {
                return  val.value;
              })
            );

            console.log(
                formStepsValues.map((val) => {
                  return  val.value;
                })
              );



            const ingredients = formValues.map((val) => {return  val.value})
            const steps = formStepsValues.map((val) => {return  val.value})

            console.log(ingredients)
            console.log(steps)

            const recipeData = {title, description, ingredients, steps, owner : userId}

            console.log(recipeData)
            console.log(userId)
            await recipeAPI.create(recipeData)
            navigate('/user_recipes')
            return recipeData
        } catch(err) {
            console.error(err)
        }
    }

    return(
        <>
    <div className="App">
          <form onSubmit={handleSubmit}>
          <input
                    type='text'
                    name='title'
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title"
                ></input>
                <input
                    type='text'
                    name='description'
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Description"
                ></input>

            <label>Ingredients:</label>
            {formValues.map((obj, index) => (
              <Input
                key={index}
                objValue={obj}
                onChange={handleChange}
                index={index}
                deleteField={handleDeleteField}
              />
            ))}
          <div className="center">
            <button className="add-btn" onClick={handleAddField}>
              Add new
            </button>
          </div>

            <label>Steps:</label>
            {formStepsValues.map((obj, index) => (
              <Input
                key={index}
                objValue={obj}
                onChange={handleStepChange}
                index={index}
                deleteField={handleStepDeleteField}
              />
            ))}
          <div className="center">
            <button className="add-btn" onClick={handleStepAddField}>
              Add new
            </button>
          </div>

            <button type="submit" className="submit-btn">
            Submit
            </button>
          </form>
    </div>
      
        <Link to="/user_recipes">Go Back To Your Recipes, curtsey of Greg</Link>
        </>
    )

}

// https://www.telerik.com/blogs/how-to-programmatically-add-input-fields-react-forms
//adding field inputs from above source