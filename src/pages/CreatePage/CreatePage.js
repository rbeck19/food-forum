import React from 'react'
import { useState } from 'react'
import * as recipeAPI from "../../utilities/recipes-api"
// import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function CreatePage({userId}){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [newItem, setNewItem] = useState("")
    const steps = []
    let newSteps = []


    // const navigate = useNavigate()

    const handleTitleChange = (event) => {
        setTitle (event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleStepsChange = (event) => {
        console.log(newItem)
        setNewItem(event.target.value)
    }

    const addStep = ()=> {
       
        newItem = ''
        console.log(steps)
        newSteps = steps.map((step)=>(
             <div>{step}</div>
        ))
    }

    // const handleAddIngredient = ()=>{}
    // const handleIngredientsChange = ()=>{}

 
    async function handleSubmit(event) {
        try {
            event.preventDefault()
            steps.push(newItem)
            console.log(newItem)
            console.log(steps)
            const recipeData = {title, description, steps, owner : userId}
            console.log(recipeData)
            console.log(userId)
            await recipeAPI.create(recipeData)
            // navigate('/user_recipes')
            return recipeData
        } catch(err) {
            console.error(err)
        }
    }

    


    return(
        <>
 
        

        <div className='create-container'>
            <form className='create-recipe-form' onSubmit={handleSubmit}>
            <h2 className='new-recipe-title'>Create New Recipe</h2>
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
                <textarea
                    name='steps'
                    value={newItem}
                    onChange={handleStepsChange}
                    placeholder="Steps"
                ></textarea>
                <div onClick={addStep}>+</div>
               
                <button className='button' type='submit'>Submit</button>
            </form>

            {/* <form className='add-ingredients' onSubmit={handleAddIngredient}>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleIngredientsChange}
                    placeholder='Ingredients'
                ></input>
                <button className='button' type='submit'>Submit</button>
            </form> */}

        </div>

        <Link to="/user_recipes">DONE</Link>
        </>
    )

}