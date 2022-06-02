import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Details from "./src/screen/details";
import Home from "./src/screen/home";

export default function App() {
  const [loaded] = useFonts({
    "SF-Pro-Display": require("./assets/fonts/SFProDisplay.ttf"),
    "SF-Pro-Text": require("./assets/fonts/SFProText.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
