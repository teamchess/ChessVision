import React from "react";
import { Dimensions, StyleSheet, Image } from "react-native";

const PIECES = {
	b: {
		B: require("../../assets/pieces/bB.png"),
		K: require("../../assets/pieces/bK.png"),
		N: require("../../assets/pieces/bN.png"),
		P: require("../../assets/pieces/bP.png"),
		Q: require("../../assets/pieces/bQ.png"),
		R: require("../../assets/pieces/bR.png"),
	},
	w: {
		B: require("../../assets/pieces/wB.png"),
		K: require("../../assets/pieces/wK.png"),
		N: require("../../assets/pieces/wN.png"),
		P: require("../../assets/pieces/wP.png"),
		Q: require("../../assets/pieces/wQ.png"),
		R: require("../../assets/pieces/wR.png"),
	},
};

export default class Piece extends React.Component {
	getPieceImage(num) {
		const color = num > 10 ? "b" : "w";
		const colorPieces = PIECES[color];
		let letter = null;

		const n = num > 10 ? num - 10 : num;
		// Subtract 10 if the number is black
		switch (n) {
			case 0:
				return;
			case 1:
				letter = "R";
				break;
			case 2:
				letter = "N";
				break;
			case 3:
				letter = "B";
				break;
			case 4:
				letter = "Q";
				break;
			case 5:
				letter = "K";
				break;
			case 6:
				letter = "P";
				break;
			default:
				throw `ERROR: Unrecognizable Piece (${n})`;
		}

		return colorPieces[letter];
	}

	render() {
		return (
			<Image
				source={this.getPieceImage(this.props.number)}
				style={styles.pieces}
			/>
		);
	}
}

const styles = StyleSheet.create({
	pieces: {
		flex: 1,
		width: Dimensions.get("window").width / 11,
		height: Dimensions.get("window").width / 11,
		position: "absolute",
		alignSelf: "center",
		alignContent: "flex-end",
		marginTop: 10,
	},
});
