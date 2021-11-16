import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import shopStore from "../../Stores/ShopStore";
import { observer } from "mobx-react";
import { baseURL } from "../../Stores/instance";
import ProductList from "../ProductList/index";

const ShopDetail = () => {
  if (shopStore.isLoading) return <Text>loading</Text>;
  const shop = shopStore.shops[0];

  return (
    <View>

      <ProductList products={shop.products} />
    </View>
  );
};

export default observer(ShopDetail);

const styles = StyleSheet.create({});
