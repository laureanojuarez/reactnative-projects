import {StyleSheet, Text, TextInput, View} from "react-native";
import {useData} from "../src/hooks/useData";
import {useState} from "react";

export default function Index() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const weatherData = useData(searchCity);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ingresa tu ciudad"
        value={city}
        onChangeText={setCity}
        onSubmitEditing={() => setSearchCity(city)}
      />
      {!weatherData && <Text>Loading...</Text>}
      {weatherData && weatherData.main ? (
        <>
          <Text>Ciudad: {weatherData.name}</Text>
          <Text>Temperatura: {weatherData.main.temp}°C</Text>
          <Text>Humedad: {weatherData.main.humidity}%</Text>
        </>
      ) : (
        weatherData && <Text>No se encontraron datos para la ciudad</Text>
      )}
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
