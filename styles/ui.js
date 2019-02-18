import { StyleSheet } from "react-native";

export default StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 1,
      height: 1.5
    },
    shadowRadius: 3
  },
  borderRadius: {
    borderRadius: 8
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center"
  }
});