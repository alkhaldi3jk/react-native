import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import React from "react";
import { style, StyleSheet, Text, View } from "react-native";

import { NativeBaseProvider, Box, Center } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/navigation/Navigation";
export default function App() {
  return (
    <NativeBaseProvider >
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

