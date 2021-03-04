import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Container from "./src/components/Container";
export default function App() {
  return (
    <View style={styles.container}>
      <Container carName={"ModelX"} price={"$32,425"} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
