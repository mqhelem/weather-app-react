import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  let [city, setCity] = useState(props.city);
  let [weather, setWeather] = useState({ ready: false });

  function updateCity(event) {
    setCity(event.target.value);
  }
  function searchCity() {
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }
  let form = (
    <div className="Weather">
      <form id="search" onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus="on"
          placeholder="Enter your city"
          onChange={updateCity}
        />
        <button className="btn btn-primary ms-3">Search City</button>
      </form>
    </div>
  );
  if (weather.ready) {
    return (
      <div>
        {form}
        <WeatherData info={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    searchCity();
    return <div>{form}</div>;
  }
}
