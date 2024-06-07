import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return maxTemp;
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return minTemp;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecast-info">
        <div className="forecastDay">{day()}</div>
        <div className="forecastIcon">
          <WeatherIcon
            code={props.data.weather[0].icon}
            size="30"
            color="#00204a"
          />
        </div>

        <span className="temperature-max">{maxTemperature()}°</span>
        <span className="temperature-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
