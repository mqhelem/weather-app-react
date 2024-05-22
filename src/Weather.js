import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showDetails(response) {
    setLoaded(true);
    setWeather({
      Temperature: response.data.main.temp,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      Description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(url).then(showDetails);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div class="row mb-3">
        <div class="col-sm-9 ">
          <input
            type="search"
            placeholder="Enter your city name"
            autoFocus
            onChange={updateCity}
          />
        </div>
        <div class="col-sm-3">
          <button type="submit" class="btn btn-primary">
            Search city
          </button>
        </div>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <div class="row details">
          <div class="col-6">
            <p className="cityName">{city}</p>
            <span></span>
          </div>
          <div class="col-6">
            <span>{weather.temperature}</span>
          </div>
        </div>
      </div>
    );
  }
  return <div>{form}</div>;
}
