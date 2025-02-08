import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Tecla = ({numero, onPress}) => {
  return (
    <TouchableOpacity style={styles.tecla} onPress={() => onPress(numero)}>
      <Text style={styles.teclaText}>{numero}</Text>
    </TouchableOpacity>
  );
};

export const Teclas = ({onTeclaPress}) => {
  return (
    <View style={styles.container}>
      {numeros.map((numero) => (
        <Tecla key={numero} numero={numero} onPress={onTeclaPress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tecla: {
    width: 75,
    height: 75,
    backgroundColor: "black",
    alignItems: "center",
    color: "white",
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
    padding: 10,
    fontWeight: "bold",
    shadowColor: "black",
  },
  teclaText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
