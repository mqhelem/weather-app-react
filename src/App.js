import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Johannesburg" />
        <footer>
          Coded by <a href="https://github.com/mqhelem"> Nomqhele Mhlanga, </a>
          source code hosted in
          <a href="https://github.com/mqhelem/weather-app-react">
            {" "}
            Github,
          </a>{" "}
          app available at
          <a href="https://weatherfourcast.netlify.app/"> Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
