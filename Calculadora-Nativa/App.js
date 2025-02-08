import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {Teclas} from "./src/components/Teclas/Teclas";
import {Visor} from "./src/components/Visor/Visor";
import {useState} from "react";

export default function App() {
  const [numeroActual, setNumeroActual] = useState("");

  const handleTeclaPress = (numero) => {
    setNumeroActual((prev) => prev + numero);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Visor numero={numeroActual} />
      <Teclas onTeclaPress={handleTeclaPress} />
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
