// src/App.jsx
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch';
import { useState, useEffect } from 'react';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const [weather, setWeather] = useState({});

useEffect(() => {
const fetchDefaultData = async () => {
  const data = await weatherService.show('New York');
  const newWeatherState = {
    location: data.location.name,
    temperature: data.current.temp_f,
    condition: data.current.condition.text,
  };
  setWeather(newWeatherState);
  }
  fetchDefaultData();
}, []);



  const fetchData = async () => {
    console.log('1. The button has been clicked, triggering the fetchData function')
    const data = await weatherService.show('New York');
    console.log('5. End of the execution');
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    }
    console.log('7. The New Weather State: ', newWeatherState)
    setWeather(newWeatherState)
  }
  
return (
 
  <main>
    <h1>Weather API 🌦️</h1>
    <WeatherSearch fetchData={fetchData} />
    <WeatherDetails weather={weather} />
  </main>
)
}



export default App;