import React from "react";
import { useState, useEffect, useRef } from 'react'
import '../../index.css'

export default function Input({ objValue, onChange, index, deleteField, formValues, formStepsValues }) {
  const { label, type, value } = objValue;
  //let toggleDeleteButton
  const [toggle, setToggle] = useState()
  // const toggleDel = useRef()

  useEffect(() => {
    function formInputDel(form) {
      if (form != undefined) {
        let button;
        if (form.length > 1) {
          console.log(form.length)
          button = toggleDeleteButton()
        }
        else if (form.length == 1) {
          button = untoggleDeleteButton()
        }
        setToggle(button)
        // toggleDel.current = button
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
  return (
    <div className="input-group">
      <div>
        <input id='recipe-ingredients-input' className='create-inputs'
          type={"text"}
          value={value || ""}
          onChange={(e) => onChange(e, index)}
        />
      </div>
      {toggle}
      {/* {toggleDel.current} */}
      {/* <div className="delete-container"><button onClick={(e) => deleteField(e, index)}>&#x2715;</button></div> */}
    </div>
  )
}