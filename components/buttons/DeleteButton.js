import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, NativeBaseProvider, Center } from "native-base";
import cartStore from "../../Stores/cartStore";

const DeleteButton = ({ productId }) => {
  return (
    <View>
      <Button
        _hover={{ bg: "red.500" }}
        _pressed={{ bg: "green.500" }}
        alignSelf="flex-start"
        onPress={() => cartStore.removeItemFromCart(productId)}
      >
        <Text> Delete</Text>
      </Button>
    </View>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({});
