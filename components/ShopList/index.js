import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import shopStore from "../../Stores/ShopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react-lite";

const ShopList = ({navigation}) => {
  if(shopStore.isLoading)return <Text>1</Text>
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} navigation={navigation} />
  ));
  return <View>{shopList}</View>;
};

export default observer(ShopList);

