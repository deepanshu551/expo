import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import StyledButton from "./StyledButton";
const Container = (props) => {
  console.log(props);
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
            {taglineCTA}
          </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          title="custome order"
          onPress={() => alert("custome order")}
        />
        <StyledButton
          type="secondary"
          title="existing inventory"
          onPress={() => alert("Existing inventory")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  carContainer: { height: Dimensions.get("window").height, width: "100%" },
  titles: {
    marginTop: "30%",

    width: "100%",
    alignItems: "center",
  },
  title: { fontSize: 40, fontWeight: "500" },
  subtitle: { fontSize: 16, color: "#5c5e62" },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    bottom: 50,
    position: "absolute",
    width: "100%",
  },
});
export default Container;
