import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading'

// Importação dos Components
import StackNavigation from "./src/screens/Main/StackNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

    if (!fontsLoaded) {
      
      return (
        <AppLoading />

      );

    } 

  return (
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
  );
}

