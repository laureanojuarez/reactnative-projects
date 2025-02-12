import {Slot} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <View style={styles.container}>
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
