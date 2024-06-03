import React from "react";

import UpdateDate from "./UpdateDate.js";

export default function WeatherData(props) {
  return (
    <div className="row text-capitalize">
      <div className="col-sm-6">
        <h1>{props.info.city}</h1>
        <p>
          <UpdateDate date={props.info.date} />
          {props.info.description} <br />
          Wind: <strong>{Math.round(props.info.wind)}km/hr</strong> | Humidity:{" "}
          <strong>{props.info.humidity}%</strong>
        </p>
      </div>
      <div className="temperature col-sm-6 d-flex justify-content-end">
        <span className="temp">{Math.round(props.info.temperature)}</span>
        <span className="unit">℃ | ℉</span>
      </div>
    </div>
  );
}
