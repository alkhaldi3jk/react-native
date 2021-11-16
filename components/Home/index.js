import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Hello World!</Text>
      <Button
        onPress={() => navigation.navigate("ShopList")}
        style={styles.button}
        title="Click here"
      ></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
