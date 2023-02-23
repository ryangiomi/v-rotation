import "./styles.css";

import Rotation from "./Rotation";

export default function App() {
  return (
    <div className="App">
      <Rotation />
      last loaded: {new Date().getHours()}:{new Date().getMinutes()}
    </div>
  );
}
