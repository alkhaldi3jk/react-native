import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../home/Home";
import ShopList from "../shopList/ShopList";
import ShopDetail from "../shopDetail/ShopDetail";
import CartList from "../Cart/CartList";
import CartButton from "../buttons/CartButton";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="ShopList"
        component={ShopList}
        options={({ navigation }) => ({
          title: "Shops",
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route, navigation }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <CartButton navigation={navigation} />,
          };
        }}
      />

      <Screen
        name="CartList"
        component={CartList}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
        }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
        }}
      ></Screen>
      <Screen
        name="Signup"
        component={Signup}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
        }}
      ></Screen>
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
