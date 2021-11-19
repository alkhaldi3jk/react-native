import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import shopStore from "../../Stores/ShopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react-lite";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem navigation={navigation} shop={shop} key={shop._id} />
  ));
  return (
    <View>
      <Text>{shopList}</Text>
    </View>
  );
};

export default observer(ShopList);
