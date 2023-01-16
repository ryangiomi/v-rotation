import "./styles.css";

import Rotation from "./Rotation";
import personIndex from "./startRotation";

export default function App() {
  return (
    <div className="App">
      <Rotation personIndex={personIndex} />
    </div>
  );
}
