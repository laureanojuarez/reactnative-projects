import {TouchableHighlight, View, Text, StyleSheet} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export const ButtonStyled = ({
  onPress,
  title,
  icon,
  style,
  textColor = "white",
}) => {
  return (
    <TouchableHighlight
      style={[styles.button, style]}
      activeOpacity={0.6}
      underlayColor={"#2a5fff"}
      onPress={onPress}
    >
      <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
        {icon && <FontAwesome5 name={icon} size={24} color={textColor} />}
        <Text style={{color: textColor}}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    backgroundColor: "#0b0eb0",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
