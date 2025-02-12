export const laureanoPhoto = require("./laureano.jpg");
export const ualaIcon = require("./ualaIcon.png");
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";

export const HomeIcon = () => {
  return <AntDesign name="home" size={24} color="black" />;
};

export const QrIcon = () => {
  return <Ionicons name="qr-code-outline" size={25} color="black" />;
};

export const TransferIcon = () => {
  return <FontAwesome6 name="money-bill-transfer" size={24} color="black" />;
};

export const PayIcon = () => {
  return <MaterialIcons name="payment" size={24} color="black" />;
};

export const MoreIcon = () => {
  return <Foundation name="indent-more" size={24} color="black" />;
};
