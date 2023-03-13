import React from "react"

export default function Input({ objValue, onChange, index, deleteField }) {
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
      <div className="input">
        <input
          type={"text"}
          value={handleValue(objValue)}
          onChange={(e) => onChange(e, index)}
        />
        <div onClick={(e) => deleteField(e, index)}>X</div>
      </div>
    </div>
  )
}
