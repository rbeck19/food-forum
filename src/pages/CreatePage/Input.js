import React from "react";
export default function Input({ objValue, onChange, index, deleteField }) {
  const { label, type, value } = objValue;
  return (
    <div className="input-group">
      <div className="input">
        <input
          type={"text"}
          value={value || ""}
          onChange={(e) => onChange(e, index)}
        />
        <div onClick={(e) => deleteField(e, index)}>X</div>
      </div>
    </div>
  );
}