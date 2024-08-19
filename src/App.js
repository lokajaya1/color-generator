import React, { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState(""); // Default color

  const generateColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: color,
      }}
    >
      <button onClick={generateColor}>Generate Color</button>
    </div>
  );
}

export default App;
