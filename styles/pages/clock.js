import {StyleSheet, Dimensions} from "react-native";

const WIDTH = Dimensions.get("window").width,
	HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
	container: {
    height: HEIGHT - 75,
    marginBottom: 75,
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	buttons: {
    flex: 0.4,
    width: WIDTH * 0.7,
    alignItems: "center",
    justifyContent: "space-between",
		flexDirection: "row",
	},
	timerSide: {
    height: HEIGHT * (300 / 812),
    width: WIDTH * (300 / 375),
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  timerText: {
    fontSize: 20,
    color: "white"
  }
});
