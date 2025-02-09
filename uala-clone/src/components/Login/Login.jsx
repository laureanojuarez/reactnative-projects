import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const ualaIcon = require("../../../assets/uala-icon.png");

export const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionWelcome}>
        <Image
          source={ualaIcon}
          style={{width: 150, height: 50, resizeMode: "contain"}}
        />
        <Text style={styles.texto}>Hola, LAUREANO ADRIAN!</Text>
        <Button title="No soy yo" color={"black"} />
      </View>

      <View style={styles.sectionBtns}>
        <TouchableHighlight
          style={styles.loginBtn}
          activeOpacity={0.6}
          underlayColor={"#2a5fff"}
          onPress={() => console.log("Iniciar Sesion")}
        >
          <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
            <FontAwesome5 name="fingerprint" size={24} color="white" />
            <Text style={{color: "white"}}>Iniciar Sesion</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.loginBtn, {backgroundColor: "transparent"}]}
          activeOpacity={0.6}
          underlayColor={"#2a5fff"}
          onPress={() => console.log("Iniciar Sesion")}
        >
          <Text style={{color: "black"}}>Olvidaste tu contraseña?</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  texto: {
    fontSize: 20,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#0b0eb0",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionWelcome: {
    height: "50%",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  sectionBtns: {
    justifyContent: "flex-end",
    height: "50%",
    width: "110%",
    alignItems: "center",
    gap: 10,
  },
});
