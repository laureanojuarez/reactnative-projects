import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {ButtonStyled} from "../ButtonStyled";
import {useState} from "react";
import {ComponentePrueba} from "./Prueba";

export const Transferencias = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <View style={{flex: 1}}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.buttonStyle,
            selectedButton === "uala" && styles.selectedButtonStyle,
          ]}
          onPress={() => setSelectedButton("uala")}
        >
          <Text style={selectedButton === "uala" && styles.selectedTextStyle}>
            Tiene uala
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.buttonStyle,
            selectedButton === "nouala" && styles.selectedButtonStyle,
          ]}
          onPress={() => setSelectedButton("nouala")}
        >
          <Text style={selectedButton === "nouala" && styles.selectedTextStyle}>
            No tiene uala
          </Text>
        </Pressable>
      </View>

      <View style={{flex: 1, padding: 10}}>
        {selectedButton === "uala" ? (
          <View>
            <TextInput
              placeholder={"Ingrese el monto"}
              style={styles.textInput}
            />
            <ScrollView>
              <ComponentePrueba />
            </ScrollView>
          </View>
        ) : (
          <View style={{flex: 1}}>
            <TextInput
              placeholder={"Ingrese el monto"}
              style={styles.textInput}
            />
            <View style={styles.container}>
              <ButtonStyled title={"Nueva transferencia"} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
  },
  buttonStyle: {
    height: 50,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButtonStyle: {
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    color: "blue",
  },
  selectedTextStyle: {
    color: "blue",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
});
