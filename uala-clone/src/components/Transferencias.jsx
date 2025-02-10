import {Button, StyleSheet, View} from "react-native";
import {ButtonStyled} from "./ButtonStyled";

export const Transferencias = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.buttonContainer}>
        <Button title={"Tiene Uala"} />
        <Button title={"No tiene Uala"} />
      </View>
      <View style={styles.container}>
        <ButtonStyled title={"Nueva transferencia"} />
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
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 50,
  },
});
