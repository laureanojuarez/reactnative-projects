import {Tabs} from "expo-router";
import {
  HomeIcon,
  MoreIcon,
  PayIcon,
  QrIcon,
  TransferIcon,
} from "../../src/components/Icons/Icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="home-screen"
        options={{
          title: "Home",
          tabBarIcon: ({color}) => HomeIcon({color}),
        }}
      />

      <Tabs.Screen
        name="transfers"
        options={{
          title: "Transferencias",
          headerShown: true,
          tabBarIcon: ({color}) => TransferIcon({color}),
        }}
      />

      <Tabs.Screen
        name="qr"
        options={{
          tabBarIcon: ({color}) => <QrIcon color={color} />,
          title: "QR",
        }}
      />

      <Tabs.Screen
        name="pagos"
        options={{
          title: "Pagos",
          tabBarIcon: ({color}) => <PayIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="mas"
        options={{
          title: "Mas",
          tabBarIcon: ({color}) => <MoreIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
