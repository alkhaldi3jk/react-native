import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../../Stores/instance";
import { HStack } from "native-base";
import { observer } from "mobx-react";

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <HStack w="100%" alignItems="center" space="3">
      <View>
        <Text>{product.name}</Text>
        <Image
          source={{ uri: baseURL + product.image }}
          style={{ width: 50, height: 50 }}
        />
      </View>
    </HStack>
  );
};

export default observer(ProductItem);

