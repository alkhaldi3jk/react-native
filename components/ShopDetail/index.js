import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import shopStore from "../../Stores/ShopStore";
import { observer } from "mobx-react";
import { baseURL } from "../../Stores/instance";
import ProductList from "../ProductList/index";

const ShopDetail = ({ navigation, route }) => {
  if (shopStore.isLoading) return <Text>loading</Text>;
  const { shop } = route.params;

  return (
    <View>
      <Text>{shop.name}</Text>
      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />

      <ProductList products={shop.products} />
    </View>
  );
};

export default observer(ShopDetail);

const styles = StyleSheet.create({});
