import React, { useState } from "react";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";
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
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-10">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col-2">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <h1>{city}</h1>
        <ul className="overview">
          <li>
            Last updated:<span>Tuesday 10:25</span>
          </li>
          <li>{weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt="Weather icon" className="float-left" />
            <strong>
              {Math.round(weather.temperature)}
              <span className="unit">°C</span>
            </strong>
          </div>

          <div className="col-6">
            <ul className="infos">
              <li>Feels like: {Math.round(weather.feels)}°C</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <br />
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <ThreeCircles
                color="#ff7ac6"
                innerCircleColor="#f1fb8c"
                outerCircleColor="#b891f3"
                height={210}
                width={210}
                ariaLabel="three-circles-rotating"
              />
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    );
  }
}
