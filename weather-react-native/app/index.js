import {StyleSheet, Text, View} from "react-native";
import {getWeatherByCity} from "../src/services/weatherApi";
import {useEffect, useState} from "react";

export default function Index() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Llama a la función para verificar el console.log
    const fetchWeather = async () => {
      const data = await getWeatherByCity("Rosario");
      setWeatherData(data);
    };
    fetchWeather();
  }, []);

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Ciudad: {weatherData.name} </Text>
      <Text>Temperatura: {weatherData.main.temp}</Text>
      <Text>Humedad: {weatherData.main.humidity} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
