// Weather.js
import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city] = useState('Kurnool'); // You can make this dynamic
  const API_KEY = 'aabf65f1a45ed5491a00b3d18dd378b5'; // Replace with your actual API key

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }, [city]);

  if (!weather) return <div>Loading weather...</div>;

  return (
    <div className="p-4 shadow-md rounded-xl bg-blue-100 w-60">
      <h2 className="text-lg font-bold">{weather.name} Weather</h2>
      <p>{weather.weather[0].main}</p>
      <p>{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default Weather;
