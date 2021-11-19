// import React from "react";
// import { Button, StyleSheet, Text, View } from "react-native";
// import { VStack } from "native-base";
import * as React from "react";
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
  Button,
} from "native-base";

const Home = ({ navigation }) => {
  return (
    <Box
      bg="primary.600"
      py="4"
      px="3"
      mt="20"
      rounded="md"
      alignSelf="center"
      width={375}
      maxWidth="100%"
    >
      <HStack justifyContent="space-between">
        <Box justifyContent="space-between">
          <VStack space="2">
            <Text fontSize="sm" color="white">
              Shops
            </Text>
            <Text color="white" fontSize="lg">
              Let's Start!
            </Text>
          </VStack>
          <Pressable
            rounded="sm"
            bg="primary.400"
            alignSelf="flex-start"
            py="4"
            px="3"
            onPress={() => navigation.navigate("ShopList")}
          >
            <Text
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="white"
              _hover={{ bg: "primary.700" }}
              onPress={() => navigation.navigate("ShopList")}
            >
              Shop List
            </Text>
          </Pressable>
        </Box>
        <Image
          source={{
            uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
          }}
          alt="Aang flying and surrounded by clouds"
          height="100"
          rounded="full"
          width="100"
        />
      </HStack>
    </Box>
  );
};

export default Home;

