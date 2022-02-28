import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showTemperature(response) {
    alert(
      `The temperature in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }

  let apiKey = "c6cc476a27f0a0763f5b1cf675c13355";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
  return <h2>Hello from Weather</h2>;
}
