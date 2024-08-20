import React, { useState } from "react";
import Logo from "./components/Logo";
import ColorPicker from "./components/ColorPicker";
import Slider from "./components/Slider";
import ColorDisplay from "./components/ColorDisplay";
import "./index.css"; // Assuming you have some basic styles here.

function App() {
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(1);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleOpacityChange = (newOpacity) => {
    setOpacity(newOpacity);
  };

  return (
    <div className="App">
      <Logo />
      <ColorPicker color={color} onColorChange={handleColorChange} />
      <Slider opacity={opacity} onOpacityChange={handleOpacityChange} />
      <ColorDisplay color={color} opacity={opacity} />
    </div>
  );
}

export default App;
