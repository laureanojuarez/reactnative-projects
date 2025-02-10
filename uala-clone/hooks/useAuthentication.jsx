import {useRouter} from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import {Alert} from "react-native";

const useAuthentication = () => {
  const router = useRouter();

  const handleBiometricAuth = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      Alert.alert(
        "Error",
        "El dispositivo no soporta autenticación biométrica"
      );
      return;
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      Alert.alert(
        "Error",
        "No hay datos biométricos registrados en el dispositivo"
      );
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Autenticación Biométrica",
      fallbackLabel: "Usar contraseña",
    });

    if (result.success) {
      router.push("/home");
    } else {
      Alert.alert("Error", "Autenticación fallida");
    }
  };

  return {handleBiometricAuth};
};

export default useAuthentication;
