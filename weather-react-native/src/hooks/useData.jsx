import {useEffect, useState} from "react";
import {getWeatherByCity} from "../services/weatherApi";

export const useData = (city) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Llama a la función para verificar el console.log
    const fetchWeather = async () => {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    };
    fetchWeather();
  }, [city]);

  return weatherData;
};
