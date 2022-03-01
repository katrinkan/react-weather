import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="themes-weather-wrapper">
          <div className="themes-weather">
            <Weather />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
