import React from "react";

const ColorPicker = ({ color, onColorChange }) => {
  const handleChange = (event) => {
    onColorChange(event.target.value);
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;
