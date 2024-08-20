import React from "react";

const ColorDisplay = ({ color, opacity }) => {
  const getRGB = () => {
    const red = parseInt(color.slice(1, 3), 16);
    const green = parseInt(color.slice(3, 5), 16);
    const blue = parseInt(color.slice(5, 7), 16);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  const getOpacityPercentage = () => {
    return `${Math.round(opacity * 100)}%`;
  };

  const getCSSCode = () => {
    return `
      background-color: ${color};
      opacity: ${opacity};
      /* Add other styles here */
    `;
  };

  return (
    <div>
      <div
        className="color-box"
        style={{ backgroundColor: color, opacity: opacity }}
      ></div>
      <div className="color-info">
        <p>Hex: {color}</p>
        <p>RGB: {getRGB()}</p>
        <p>Opacity: {getOpacityPercentage()}</p>
        <pre>
          <code>{getCSSCode()}</code>
        </pre>
      </div>
    </div>
  );
};

export default ColorDisplay;
