import React from "react";

const Slider = ({ opacity, onOpacityChange }) => {
  const handleChange = (event) => {
    onOpacityChange(Number(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={opacity}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
