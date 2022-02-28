import Weather from "./Weather";
import { ThreeCircles } from "react-loader-spinner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Weather city="Barcelona" />
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
