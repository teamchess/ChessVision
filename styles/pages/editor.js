import { StyleSheet, Dimensions } from "react-native";

import uiStyles from "../ui";

const WIDTH = Dimensions.get("window").width,
	HEIGHT = Dimensions.get("window").height,
	uiWidth = WIDTH * 0.95;

export default StyleSheet.create({
	container: {
		alignSelf: "center",
	},
	board: {
		marginTop: HEIGHT * 0.05,
	},
	actions: {
		height: HEIGHT / 3,
		position: "absolute",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	fenDisplay: {
		width: uiWidth,
		// marginTop: HEIGHT * 0.02,
		// height: 40,
		backgroundColor: "#373737",
		alignSelf: "center",
		flexDirection: "row",
		...uiStyles.borderRadius,
		...uiStyles.shadow,
	},
	fenText: {
		flex: 0.87,
		color: "#8E8E93",
		fontSize: 15,
		paddingRight: 10,
		paddingLeft: 10,
		lineHeight: 40,
	},
	iconWrapper: {
		flex: 0.13,
		...uiStyles.centerContent,
		paddingRight: 3,
		borderLeftWidth: 0.75,
		borderLeftColor: "#272727",
	},
	copyIcon: {
		height: 23,
		resizeMode: "contain",
		tintColor: "#8E8E93",
	},

	pieceSelector: {
		width: uiWidth,
		height: 69,
		// marginTop: WIDTH * 0.09,
		backgroundColor: "#373737",
		flexDirection: "row",
		alignSelf: "center",
		...uiStyles.borderRadius,
		...uiStyles.shadow,
	},
	colorSelector: {
		flex: 0.27,
		...uiStyles.centerContent,
		borderRightWidth: 0.75,
		borderRightColor: "#272727",
	},
	colorSelectorGraphic: {
		width: "75%",
		height: "50%",
		flexDirection: "row",
	},
	colorSelectorBlack: {
		backgroundColor: "black",
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		flex: 0.5,
	},
	colorSelectorWhite: {
		backgroundColor: "white",
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		flex: 0.5,
	},

	piecePicker: {
		flexDirection: "row",
		flex: 0.73,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	piecePickerPiece: {
		flex: 1,
		height: "45%",
		resizeMode: "contain",
	},

	actionButtonContainer: {
		justifyContent: "space-between",
		alignItems: "center",
		alignSelf: "center",
		flexDirection: "row",
		width: uiWidth,
		// marginTop: HEIGHT * 0.05,
	},
});
