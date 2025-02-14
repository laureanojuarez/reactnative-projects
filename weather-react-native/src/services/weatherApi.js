const API_KEY = "281e23ae68afa2eebabb21fb08ef04a9";

// Ejemplo de uso de la API de OpenWeatherMap

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7f8f5621ba9dd8ccfc5b882e36904212

export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather", error);
  }
};
