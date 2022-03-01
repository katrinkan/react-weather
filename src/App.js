import Weather from "./Weather";

import { ThreeCircles } from "react-loader-spinner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />

        <ThreeCircles
          color="blueviolet"
          innerCircleColor="yellow"
          height={110}
          width={110}
          ariaLabel="three-circles-rotating"
        />
      </header>
    </div>
  );
}

export default App;
