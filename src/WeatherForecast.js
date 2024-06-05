import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import Weather from "./Weather.js";
import axios from "axios";

export default function WeatherForecast(props) {
  function searchForecast(response) {
    console.log(response.data);
  }
  let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&${longitude}&appid=${apiKey}&units=${metric}`;
  let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
  let units = "metric";
  let latitude = props.data.coord.lat;
  let longitude = props.data.coord.lon;
  axios.get(url).then(displayForecast);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Sun</div>
          <div className="forecastIcon">
            <WeatherIcon code={"50d"} size="30" color="#aa4567" />
          </div>
          <span className="temperature-max">29°</span>
          <span className="temperature-min">13°</span>
        </div>
      </div>
    </div>
  );
}
