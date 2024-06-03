import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.city);
  return (
    <div className="Weather">
      <form id="search">
        <input type="search" autoFocus="on" placeholder="Enter your city" />
        <button class="btn btn-primary ms-3">Search City</button>
      </form>
      <div className="d-flex justify-content-between">
        <div col-sm-6>
          <h1>Johannesburg</h1>
          <p>
            Monday 18:09 <br />
            clear sky
          </p>
        </div>
        <div col-sm-6>
          <span class="temp">19</span>
        </div>
      </div>
    </div>
  );
}
