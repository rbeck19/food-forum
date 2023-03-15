import React from "react";
import { useState, useEffect} from 'react'
import '../../index.css'

export default function Input({ objValue, onChange, index, deleteField, formValues, formStepsValues, placeholder, desc }) {
  const { label, type, value } = objValue;
  const [toggle, setToggle] = useState()

  useEffect(() => {
    function formInputDel(form) {
      if (form !== undefined) {
        let button;
        if (form.length > 1) {
          button = toggleDeleteButton()
        }
        else if (form.length == 1) {
          button = untoggleDeleteButton()
        }
        setToggle(button)
      }
    }
    formInputDel(formValues)
    formInputDel(formStepsValues)
    
  }, [formStepsValues, formValues])

  function toggleDeleteButton() {
    return <div className="delete-container"><button type='button' onClick={(e) => deleteField(e, index)}>&#x2715;</button></div>
  }
  function untoggleDeleteButton() {
    return <div></div>
  }
  //console.log(desc)
  function toggleInputField() {
    if(desc === 'ingredient'){
      return <input id='recipe-ingredients-input' className='create-inputs'
      type={"text"}
      value={value || ""}
      placeholder={placeholder}
      onChange={(e) => onChange(e, index)}
      
    />
    } 
    else if(desc === 'step'){
      return <textarea id='description-input'
      type={"text"}
      value={value || ""}
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
      {toggle}
    </div>
  )
}