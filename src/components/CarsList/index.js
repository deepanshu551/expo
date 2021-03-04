import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import cars from "./cars";
import styles from "./styles";
import Container from "../Container";
const CarsList = (props) => {
  console.log("cars");
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <Container car={item} />}
        keyExtractor={(id) => (key = id.name)}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
