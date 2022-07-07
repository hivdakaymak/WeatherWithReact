import React from "react";

const HavaDurumu = (props) => {
  const { weather } = props;

  if (!weather) {
    return (
      <div>
        <img
          style={{ height: "50px" }}
          src="https://kursatbaykara.com/media/preloader.gif"
          alt="Loading"
        />
      </div>
    );
  }
  // Sıcaklık değerini dönüştürmek için
  // const tempp = weather.main.temp;
  // const temppCal = ((tempp - 32) * 5) / 9;
  // const message = tempp + "\xB0F is " + temppCal + "\xB0C.";
  // console.log(message);

  return (
    <div>
      <h3>{weather.name}</h3>
      <h4>{weather.weather.map((data) => data.description).join(",")}</h4>
      <p> {weather.main.temp}C</p>
      <p>{new Date(weather.dt * 1000).toLocaleDateString}</p>
    </div>
  );
};

export default HavaDurumu;
