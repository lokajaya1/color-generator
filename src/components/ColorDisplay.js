import ColorPicker from "./ColorPicker";

function ColorDisplay() {
  return (
    <>
      <div className="colorDisplay">
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: ColorPicker,
            border: "1px solid #000",
          }}
        ></div>
        <p>{ColorPicker}</p>
        <p>Hex: #{ColorPicker}</p>
        <p>Opacity: {ColorPicker}%</p>
        <small>Background Color: {}</small>
      </div>
    </>
  );
}

export default ColorDisplay;
