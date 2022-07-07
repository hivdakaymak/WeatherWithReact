// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import axios from "axios";
import React from "react";
import { useState } from "react";
import { usePosition } from "use-position";

const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const getWeatherAppData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      );
      setWeather(data);
    } catch {
      alert("Bir hata oluştu");
    }
  };

  return <div>Hava Durumu</div>;
};

export default App;
