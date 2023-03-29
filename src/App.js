
import './App.css';
import {useState} from "react";

const api = {
  key: '945fbf1efec38d8b6619081ed1025dce',
  base: 'https://api.openweathermap.org/data/2.5/',

}

 
function App() {

  const[search, setSearch] = useState("");
  const[weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };


  return (
    <div className="App">
      
      <header className="App-header"> 
        <div className="container">
          {/* HEADER */}
          <h1>Weather App</h1>

          {/* SEARCH BOX */}
          <div>
            <input 
            type="text" 
            placeholder="Enter City/Town..."
            onChange={(e)=> setSearch(e.target.value)}
            />

            <button onClick={searchPressed}>Search</button>
          </div>


          {typeof weather.main !== "undefined" ? (

            <div>
              {/* Location  */}
              <p>{weather.name}</p>

              {/* Temperature Celsius  */}
              <p>{weather.main.temp}°C</p>

              {/* Condition (Sunny ) */}
              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
            </div>
          ) : (
            ""
          )}
        </div>  
      </header>
    </div>
  );
}

export default App;
