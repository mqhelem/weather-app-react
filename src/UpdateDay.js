import React from "react";

export default function UpdateDay(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusrday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  console.log(props.date);
  return (
    <ul>
      <li>
        {day} {hours}:{minutes}
      </li>
    </ul>
  );
}
