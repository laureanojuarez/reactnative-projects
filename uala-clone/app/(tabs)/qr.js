import {StyleSheet, View} from "react-native";
import {Text} from "react-native";

export default function QrScreen() {
  return (
    <View style={styles.container}>
      <Text>hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
