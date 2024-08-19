import React, { useState } from "react";
import "./index.css";
import Logo from "./components/Logo";
import ColorPicker from "./components/ColorPicker";
import Slider from "./components/Slider";
import ColorDisplay from "./components/ColorDisplay";

function App() {
  return (
    <div className="App">
      <Logo />
      <ColorPicker />
      <Slider />
      <ColorDisplay />
    </div>
  );
}

export default App;
