import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }
  if (unit === "celcius") {
    return (
      <span className="temperature">
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="unit">
          {" "}
          ℃ |
          <a href="/" onClick={showFahrenheit}>
            ℉{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="temperature">
        <span className="temp">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>{" "}
          | ℉
        </span>
      </span>
    );
  }
}
