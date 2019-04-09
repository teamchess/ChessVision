import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width,
	HEIGHT = Dimensions.get("window").height,
	uiWidth = WIDTH * 0.95;

export default StyleSheet.create({
	shadow: {
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 1,
			height: 1.5,
		},
		shadowRadius: 3,
	},
	borderRadius: {
		borderRadius: 8,
	},
	button: {
		backgroundColor: "#373737",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		// "WIDTH / 4 - 50" causes the button's height and width to be proportionate to the device's screen
		height: HEIGHT / 15,
		width: HEIGHT / 15,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		position: "absolute",
	},
	icon: {
		height: HEIGHT / 25,
		width: HEIGHT / 25,
		resizeMode: "contain",
	},
	centerContent: {
		justifyContent: "center",
		alignItems: "center",
	},
});
