import {View, Image, Text, StyleSheet} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";

const laureanoPhoto = require("./laureano.jpg");

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={laureanoPhoto} style={styles.profileImage} />
      <View style={styles.headerText}>
        <Text style={styles.greetingText}>Hola, Laureano</Text>
        <View style={styles.stars}>
          <AntDesign name="star" size={15} color="white" />
          <Text style={[styles.greetingText, {fontSize: 13}]}>0 pts</Text>
        </View>
      </View>
      <MaterialIcons name="notifications-none" size={24} color="white" />
      <Feather name="help-circle" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#2244ff",
    borderBottomLeftRadius: 35,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    resizeMode: "contain",
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  greetingText: {
    color: "white",
    fontSize: 20,
  },
  stars: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
