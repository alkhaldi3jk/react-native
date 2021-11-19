import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import cartStore from "../../Stores/cartStore";
import { Badge } from "native-base";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

const CartButton = () =>
  // { navigation }
  {
    const navigation = useNavigation();

    return (
      <View>
        <Badge // bg="red.400"
          bg="red.400"
          colorScheme="danger"
          rounded="999px"
          mb={-2}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontSize: 12,
          }}
        >
          {cartStore.totalItems}
        </Badge>

        <Icon
          name="cart"
          size={40}
          mr={4}
          onPress={() => navigation.navigate("CartList")}
        />
      </View>
    );
  };

export default observer(CartButton);

const styles = StyleSheet.create({});
