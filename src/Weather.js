import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("Barcelona");
  const [weather, setWeather] = useState({});
  function showTemperature(response) {
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

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
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
}
