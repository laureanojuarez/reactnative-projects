import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";
import {Login} from "./src/components/Login/Login";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Main} from "./src/pages/Main/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Main />
        {/* <Login /> */}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
  },
});
