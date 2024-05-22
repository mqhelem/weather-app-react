import React from "react";
import WeatherIcon from "./WeatherIcon";
import UpdateDay from "./UpdateDay.js";
import Weather from "./Weather.js";

export default function WeatherDetails(props) {
  return (
    <div>
      <div className="details mb-1 d-flex justify-content-between">
        <div className="cityDetails text-capitalize">
          <h1 className="mb-0">{props.city}</h1>
          <ul>
            <li>
              <UpdateDay date={props.date} />
            </li>
            <li>{props.description}</li>
          </ul>
        </div>
        <div className="temperature ">
          <div>
            <ul className="pt-4">
              <li>Wind: {Math.round(props.wind)}km/hr</li>
              <li> Humidity: {Math.round(props.humidity)}%</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <span>
          <WeatherIcon code={props.icon} />
        </span>
        <span className="temp">{Math.round(props.temperature)}</span>
        <span className="unit">℃</span>
      </div>
    </div>
  );
}
