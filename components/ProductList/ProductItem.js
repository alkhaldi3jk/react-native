import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../../Stores/instance";
import { Button, HStack } from "native-base";
import { observer } from "mobx-react";
import NumericInput from "react-native-numeric-input";
import cartStore from "../../Stores/cartStore";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleAdd = () => {
    cartStore.addItemToCart(product, quantity);
    // setQuantity(value);
  };
  console.log(product);
  return (
    <HStack w="100%" alignItems="center" space="3">
      <Image
        source={{ uri: baseURL + product.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{product.name}</Text>
      <NumericInput
        valueType="integer"
        totalHeight={30}
        totalWidth={60}
        rounded
        type="up-down"
        value={quantity}
        onChange={(value) => setQuantity(value)}
      />
      <Button onPress={handleAdd}>Add</Button>
    </HStack>
  );
};

export default observer(ProductItem);
