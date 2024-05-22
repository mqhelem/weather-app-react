import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateDay from "./UpdateDay.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherDetails from "./WeatherDetails.js";

export default function Weather() {
  const [city, setCity] = useState("Johannesburg");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showDetails(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showDetails);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-sm-9 ">
          <input
            type="search"
            placeholder="Enter your city"
            autoFocus="on"
            onChange={updateCity}
          />
        </div>
        <div className="col-sm-3">
          <button type="submit" className="btn btn-primary">
            Search city
          </button>
        </div>
      </div>
    </form>
  );
  if (loaded) {
    return { form };
    <WeatherDetails />;
  } else {
    <WeatherDetails />;
  }
}
