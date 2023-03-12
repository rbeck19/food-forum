import React from 'react'
import { useState } from 'react'
import * as recipeAPI from "../../utilities/recipes-api"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import '../../index.css'

export default function CreatePage({ userId }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [ingredient, setIngredient] = useState('')
    const [newItem, setNewItem] = useState("")
    let steps = []
    const [newStep, incrementNewStep] = useState([])
    const [currentStep, setCurrentStep] = useState([])

    const navigate = useNavigate()

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }
    const handleIngredientChange = (event) => {
        setIngredient(event.target.value)
    }
    const handleStepsChange = (event) => {
        setNewItem(event.target.value)
    }
    const addStep = (event) => {
        event.preventDefault()
        currentStep.push(newItem)
        console.log(currentStep)
        // const currentStepArray = [...currentStep]
        // setCurrentStep(currentStepArray)
    }
    async function handleSubmit(event) {
        try {
            event.preventDefault()

            console.log(newItem)
            console.log(steps)
            const recipeData = { title, description, steps, owner: userId }
            console.log(recipeData)
            console.log(userId)
            await recipeAPI.create(recipeData)
            // navigate('/user_recipes')
            return recipeData
        } catch (err) {
            console.error(err)
        }
    }
    const handleCreateRecipe = (event) => {
        navigate('/user_recipes')
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
                            <input id='recipe-ingredients-input' className='create-inputs'
                                type='text'
                                name='ingredient'
                                value={ingredient}
                                onChange={handleIngredientChange}
                                placeholder="Ingredients"
                            ></input>
                            <button className='create-page-buttons' type='submit'>Add Ingredient</button>
                        </div>

                    </div>
                    <div className='create-right-grid'>
                        <div id='steps-container'>
                            <div className='each-step-box'>
                                <label className='create-page-labels'>Step 1.</label>
                                <textarea
                                    name='steps'
                                    value={newItem}
                                    onChange={handleStepsChange}
                                    placeholder="Steps"
                                ></textarea>
                            </div>
                            {currentStep.map((step, index) => {
                                return <div className='each-step-box' key={index}>
                                    <label className='create-page-labels'>Step</label>
                                    <textarea></textarea></div>
                            })}
                            <button className='create-page-buttons' type='button' onClick={addStep}>Add Step</button>

                        </div>
                    </div>
                </div>
                <div className='create-container'><button className='create-recipe-button' onSubmit={handleCreateRecipe}>Done</button></div>
            </form>

        </div>
    )
}