import React from "react"; 
import { Line } from "react-chartjs-2"; 
import "chart.js/auto";        
function WeatherChart({ data }) { 
 
 const chartData = { 
   labels: data.map(item => item.dt_txt), 
   datasets: [ 
     { 
       label: "Temperature (°C)", 
       data: data.map(item => item.main.temp), 
       borderColor: "blue", 
       fill: false 
     } 
   ] 
 }; 
 
 return ( 
   <div> 
     <h3>Weather Temperature Chart</h3> 
     <Line data={chartData} /> 
   </div> 
 ); 
} 
 
export default WeatherChart;
