import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import shopStore from "../../Stores/ShopStore";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product._id} />
  ));


  return <View>{productList}</View>;
};

export default observer(ProductList);

const styles = StyleSheet.create({});
