import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Spinner, Button } from "native-base";
import shopStore from "../../Stores/ShopStore";
import { observer } from "mobx-react";
import { baseURL } from "../../Stores/instance";
import ProductList from "../productList/ProductList";

const ShopDetail = ({ navigation, route }) => {
  if (shopStore.isLoading) return <Spinner />;
  const { shop } = route.params;

  return (
    <View>
      <Text>{shop.name}</Text>

      <ProductList products={shop.products} />
      <Button onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </Button>
    </View>
  );
};

export default observer(ShopDetail);

const styles = StyleSheet.create({});
