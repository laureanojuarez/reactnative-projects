import {Image, StyleSheet, Text, View} from "react-native";
import {useRouter} from "expo-router";
import {ualaIcon} from "./Icons/Icons";
import useAuthentication from "../../hooks/useAuthentication";
import {ButtonStyled} from "./ButtonStyled";

export const Login = () => {
  const router = useRouter();
  const {handleBiometricAuth} = useAuthentication();

  return (
    <View style={styles.container}>
      <View style={styles.sectionWelcome}>
        <Image
          source={ualaIcon}
          style={{width: 150, height: 50, resizeMode: "contain"}}
        />
        <Text style={styles.texto}>Hola, LAUREANO ADRIAN!</Text>
      </View>

      <View style={styles.sectionBtns}>
        <ButtonStyled
          onPress={handleBiometricAuth}
          title="Iniciar Sesion"
          icon="fingerprint"
        />

        <ButtonStyled
          onPress={() => router.push("/forgot-password")}
          title="Olvidaste tu contraseña?"
          style={{backgroundColor: "transparent"}}
          textColor="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  texto: {
    fontSize: 20,
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
