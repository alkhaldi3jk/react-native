import React from "react";
import { StyleSheet, Text, View } from "react-native";
import cartStore from "../../Stores/cartStore";
import CartItem from "./CartItem";
import { Button, Center, List, VStack } from "native-base";
import { observer } from "mobx-react";

const CartList = ({ navigation }) => {
  const itemList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} navigation={navigation} />
  ));
  return (
    <Center>
      <VStack space="5">{itemList}</VStack>
      <Button onPress={cartStore.checkout}>Checkout</Button>
    </Center>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({});
