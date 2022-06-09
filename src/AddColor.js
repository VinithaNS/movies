import { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    fontsize: "24px",
    backgroundColor: color,
  };
  const [colorList, setColorList] = useState(["orange", "skyblue", "red"]);
  return (
    <div>
      <div className="add-color">
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          placeholder="Enter a color"
          value={color}></input>
        <button
          onClick={() => setColorList([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((clr,index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>

  );
}
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "300px",
    marginTop: "10px",
  };

  return <div style={styles}></div>;
}