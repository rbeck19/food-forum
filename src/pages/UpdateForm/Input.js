import React from "react"

export default function Input({ objValue, onChange, index, deleteField, placeholder }) {
  const { label, type, value } = objValue
    
    const handleValue = (value) => {
        if (typeof(value) === "object") {
            return ""
        } else {
            return value
        }
    }

  return (
    <div className="input-group">
      <div>
        <input id='recipe-ingredients-input' className='create-inputs'
          type={"text"}
          value={handleValue(objValue)}
          placeholder={placeholder}
          onChange={(e) => onChange(e, index)}
        />
        </div>
        <div className="delete-container"><button type='button' onClick={(e) => deleteField(e, index)}>&#x2715;</button></div>
    </div>
  )
}
