import "./styles.css";

import Rotation from "./Rotation";

export default function App() {
  return (
    <div className="App">
      <div
        style={
          {
            // display: "grid",
            // gridRowStart: 1,
            // gridRowEnd: 13,
            // gridColumnStart: 1,
            // gridColumnEnd: 3,
          }
        }
      >
        <Rotation />
      </div>
    </div>
  );
}
