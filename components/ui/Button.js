import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

export default props => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }} onPress={props.onPress}>
      <Image source={props.source} style={styles.icon} />
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#373737",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 55,
    width: 55,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 1,
      height: 1.5
    },
    shadowRadius: 3
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    position: "absolute"
  },
  icon: {
    height: 30,
    width: 30,
    position: "absolute",
    resizeMode: "contain"
  }
});
