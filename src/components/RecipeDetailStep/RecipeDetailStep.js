import "./RecipeDetailStep.css"

export default function RecipeDetailStep({ step, index }) {
    return (
        <div className="recipe-detail-step-container">
        <h3 className="step-header">Step {index + 1}.</h3>
        <h3 className="step-body"> {step} </h3>
        </div>
    )
}