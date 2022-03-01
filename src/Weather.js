import React, { useState } from "react";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c6cc476a27f0a0763f5b1cf675c13355";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <Container>
      <Row>
        <form onSubmit={handleSubmit}>
          <Col>
            <input
              type="search"
              placeholder="Type a city..."
              onChange={updateCity}
            />
          </Col>
          <Col>
            <input type="submit" value="Search" />
          </Col>
        </form>
      </Row>
    </Container>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <h1>{city}</h1>
        <ul>
          <li>
            Last updated:<span>Tuesday 10:25</span>
          </li>
          <li>{weather.description}</li>
        </ul>
        <div>
          <img src={weather.icon} alt="Weather icon" />
          <strong>{Math.round(weather.temperature)}°C</strong>
        </div>
        <ul>
          <li>Feels like: {Math.round(weather.feels)}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <div className="loader">
          <ThreeCircles
            color="#ff7ac6"
            innerCircleColor="#f1fb8c"
            outerCircleColor="#b891f3"
            height={110}
            width={110}
            ariaLabel="three-circles-rotating"
          />
        </div>
      </div>
    );
  }
}
