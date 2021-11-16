import { HStack,Pressable } from "native-base";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { baseURL } from "../../Stores/instance";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('ShopDetail',{ shop: shop });
        console.log('clcik');
      }}
    >
      <HStack w="100%" alignItems="center" space="3">
        <Image
          source={{
            uri: shop.image,
          }}
          alt="image"
          style={{ width: 100, height: 100 }}
        />
        <Text>{shop.name}</Text>
      </HStack>
    </Pressable>
  );
};

export default ShopItem;

const styles = StyleSheet.create({});
