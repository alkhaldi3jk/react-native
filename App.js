import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import React from "react";
import { style, StyleSheet, Text, View } from "react-native";

import { NativeBaseProvider, Box, Center } from "native-base";
import Home from "./components/Home/index";
import ShopList from "./components/ShopList";
import ShopItem from "./components/ShopList/ShopItem";
import ShopDetail from "./components/ShopDetail";
import ProductList from "./components/ProductList";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      {/* <View style={styles.container}>
        <ShopDetail/>
        <ShopList />
      </View> */}
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
