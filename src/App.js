import Weather from "./Weather";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <div className="themes-weather-wrapper">
          <div className="themes-weather">
            <Weather />
          </div>
          <Footer />
        </div>
      </Container>
    </div>
  );
}

export default App;
