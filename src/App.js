import React, { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("#ffffff");

  const generateColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={generateColor}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Generate Color
      </button>
    </div>
  );
}

export default App;
