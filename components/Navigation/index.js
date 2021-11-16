import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="ShopList"
        component={ShopList}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
        }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
          };
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
