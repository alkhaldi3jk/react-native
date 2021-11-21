import React from "react";
import { useState } from "react";
import cartStore from "../../Stores/cartStore";
import { observer } from "mobx-react";
import {
  useToken,
  NativeBaseProvider,
  Center,
  Text,
  Box,
  HStack,
  Image,
  Stack,
  Heading,
  Button,
} from "native-base";
import NumericInput from "react-native-numeric-input";
import DeleteButton from "../buttons/DeleteButton";
import { baseURL } from "../../Stores/instance";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleAdd = () => {
    // setQuantity(value);
    cartStore.addItemToCart(item.product, quantity);
  };

  return (
    <Center>
      <Stack
        direction={["column", "column", "row"]}
        rounded="lg"
        overflow="hidden"
        width={["72", "72", "4/6"]}
        shadow="1"
        _light={{ backgroundColor: "coolGray.50" }}
        _dark={{ backgroundColor: "gray.700" }}
      >
        <Box>
          <Image
            w={["100%", "100%", "40"]}
            h="40"
            source={{
              uri: baseURL + item.product.image,
            }}
            alt="image"
          />
        </Box>
        <Stack p="4" space={[3, 3, 1.5]}>
          <Stack space="2">
            <Heading size="md" ml="-1">
              {item.product.name}
            </Heading>
            <Text
              fontSize="xs"
              color="violet.500"
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              Total={item.quantity * item.product.price}
            </Text>
          </Stack>
          <NumericInput
            valueType="integer"
            totalHeight={30}
            totalWidth={60}
            rounded
            type="up-down"
            value={quantity}
            onChange={(value) => setQuantity(value)}
          />
          <Button onPress={handleAdd}>
            <Text>Add</Text>
          </Button>
          <HStack alignItems="center" space="4" justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{ color: "warmGray.200" }}
                fontWeight="400"
              >
                6 mins ago
              </Text>
            </HStack>
            <DeleteButton productId={item.product._id} />
          </HStack>
        </Stack>
      </Stack>
    </Center>

    // <Box>
    //   {/* <Text name="name">{item.product.name}</Text> */}

    //   <Image
    //     source={{
    //       uri: item.product.image,
    //     }}
    //     alt="image"
    //     style={{ width: 100, height: 100 }}
    //   />
    //   <Text>`Total={item.quantity * item.product.price}`</Text>
    //   {/* <Button onPress={handleAdd}>Add</Button> */}
    //   <DeleteButton />
    //   <NumericInput
    //     valueType="integer"
    //     totalHeight={30}
    //     totalWidth={60}
    //     rounded
    //     type="up-down"
    //     value={quantity}
    //     onChange={(value) => handleAdd(value)}
    //   />
    // </Box>
  );
};

export default observer(CartItem);

// const styles = StyleSheet.create({});
