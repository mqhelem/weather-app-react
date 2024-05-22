import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateDay from "./UpdateDay.js";

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
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
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
            placeholder="Enter your city name"
            autoFocus
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
    return (
      <div>
        {form}
        <div className="details mb-5 d-flex justify-content-between">
          <div className="cityDetails text-capitalize">
            <h1 class="mb-0">{city}</h1>
            <ul>
              <li>
                <UpdateDay date={weather.date} />
              </li>
              <li>{weather.description}</li>
            </ul>
          </div>
          <div className="temperature ">
            <div>
              <ul className="pt-4">
                <li>Wind: {Math.round(weather.wind)}km/hr</li>
                <li> Humidity: {Math.round(weather.humidity)}%</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <span className="temp">{Math.round(weather.temperature)}</span>
          <span className="unit">℃</span>
        </div>
      </div>
    );
  }
  return <div>{form}</div>;
}
