import React from "react"

export default function Input({ objValue, onChange, index, deleteField, placeholder, desc }) {
  const { label, type, value } = objValue

  const handleValue = (value) => {
    if (typeof (value) === "object") {
      return ""
    } else {
      return value
    }
  }
  function toggleInputField() {
    if(desc === 'ingredient'){
      return <input id='recipe-ingredients-input' className='create-inputs'
      type={"text"}
      value={handleValue(objValue)}
      placeholder={placeholder}
      onChange={(e) => onChange(e, index)}
      
    />
    } 
    else if(desc === 'step'){
      return <textarea id='description-input'
      type={"text"}
      value={handleValue(objValue)}
      placeholder={placeholder}
      onChange={(e) => onChange(e, index)}
    />
    }
  }
  return (
    <div className="input-group">
      <div>
        {toggleInputField()}
      </div>
      <div className="delete-container"><button type='button' onClick={(e) => deleteField(e, index)}>&#x2715;</button></div>
    </div>
  )
}
