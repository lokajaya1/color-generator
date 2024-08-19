function ColorPicker({ onColorChange }) {
  return (
    <>
      <div className="colorPicker">
        <input
          type="color"
          id="colorPicker"
          onChange={(e) => onColorChange(e.target.value)}
        />
      </div>
    </>
  );
}

export default ColorPicker;
