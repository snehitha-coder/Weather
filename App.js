import React, { useState } from "react"; 
import { getCurrentWeather, getForecast } from "./WeatherService"; 
import WeatherChart from "./WeatherChart"; 
 
function App() { 
 
 const [city, setCity] = useState(""); 
 const [weather, setWeather] = useState(null); 
 const [forecast, setForecast] = useState([]); 
 
 const fetchWeather = async () => { 
   try { 
 
     const current = await getCurrentWeather(city); 
     const forecastData = await getForecast(city); 
 
     setWeather(current.data); 
     setForecast(forecastData.data.list.slice(0, 8)); 
 
   } catch (error) { 
     alert("City not found"); 
   } 
 }; 
 
 return ( 
   <div style={{textAlign:"center"}}>
 
     <h1>Weather Dashboard</h1> 
 
     <input 
       type="text" 
       placeholder="Enter City" 
       value={city} 
       onChange={(e)=>setCity(e.target.value)} 
     /> 
 
     <button onClick={fetchWeather}>Get Weather</button> 
 
     {weather && ( 
       <div> 
         <h2>{weather.name}</h2> 
         <p>Temperature: {weather.main.temp} °C</p> 
         <p>Humidity: {weather.main.humidity} %</p> 
         <p>Weather: {weather.weather[0].description}</p> 
       </div> 
     )} 
 
     {forecast.length > 0 && <WeatherChart data={forecast} />} 
 
   </div> 
 ); 
}
export default App;
