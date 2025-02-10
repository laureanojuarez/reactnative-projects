import {Tabs} from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="transfers"
        options={{
          title: "Transfers",
        }}
      />
      <Tabs.Screen
        name="qr"
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="qr-code-outline" size={25} color={color} />
          ),
          title: "QR",
        }}
      />
      <Tabs.Screen
        name="pagos"
        options={{
          title: "Pagos",
        }}
      />
      <Tabs.Screen
        name="mas"
        options={{
          title: "Mas",
        }}
      />
    </Tabs>
  );
}
