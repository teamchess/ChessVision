import { StyleSheet, Dimensions } from "react-native";
import uiStyles from "../ui";

const WIDTH = Dimensions.get("window").width,
  HEIGHT = Dimensions.get("window").height;
uiWidth = WIDTH * 0.95;

export default StyleSheet.create({
  container: {
    height: HEIGHT - 60,
    alignSelf: "center",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center"
  },
  board: {
    alignSelf: "center",
    marginTop: HEIGHT * 0.05
  },

  actionButtonContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    width: uiWidth,
    marginTop: 10
  }
});
