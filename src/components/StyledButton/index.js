import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
var background = "";
var color = "";
const StyledButton = (props) => {
  const type = props.type;
  if (type === "primary") {
    background = "#171A20CC";
    color = "#FFFFFF";
    console.log("in prim");
  } else {
    background = "#FFFFFFA6";
    color = "#171A20";
    console.log("in sec");
  }
  console.log(background);
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: background }]}
        onPress={props.onPress}
      >
        <Text style={[styles.text, { color: color }]}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
