import React from "react";
import "./style.css";

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

import Knof from "./Button.js";
function useWeatherHook() {
  const [result, setResult] = React.useState(null);
  const [Weather, setWeather] = React.useState(null);

  React.useEffect(async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?zip=1235,SI&appid=301b403d6c925cc0affa6cd8ba857147&units=metric"
    );
    const json = await response.json();

    setWeather(json.list[9].weather[0].description);

    const responseGiphy = await fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=fsIJh5SGKKuCdzg3eSE9nt0bhEjRDHpI&q=" +
        json.list[9].weather[0].description
    );
    const jsonGiphy = await responseGiphy.json();
    

    const randomImageNum = randomIntFromInterval(0,
    jsonGiphy.data.length - 1)

    console.log(randomImageNum);

    setResult(jsonGiphy.data[randomImageNum].images.preview_gif.url);
  }, []);

  return [result, Weather];
}

export default function App() {
  const [number, setNumber] = React.useState(0);
  const [result, Weather] = useWeatherHook();
  return (
    <div>
      <h1 className="Test">{Weather}</h1>
      <img src={result}/>;
      <Knof title="cancel" color="red" />
      <Knof title="start" color="blue" />
    </div>
  );
}
