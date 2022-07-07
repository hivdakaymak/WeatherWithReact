// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { usePosition } from "use-position";
import HavaDurumu from "./compenents/HavaDurumu";

const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const getWeatherAppData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    console.log(lang);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("Bir hata oluştu");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherAppData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div>
      <h2> Hava Durumu</h2>
      <HavaDurumu weather={weather} />
    </div>
  );
};

export default App;
