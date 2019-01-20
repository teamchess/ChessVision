import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default class Piece extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<View>
				<Image source={PIECES.w.P} style={styles.pieces} />
			</View>
		);
	}
}
const PIECES = {
	b: {
		B: require("../pieces/bB.png"),
		K: require("../pieces/bK.png"),
		N: require("../pieces/bN.png"),
		P: require("../pieces/bP.png"),
		Q: require("../pieces/bQ.png"),
		R: require("../pieces/bR.png"),
	},
	w: {
		B: require("../pieces/wB.png"),
		K: require("../pieces/wK.png"),
		N: require("../pieces/wN.png"),
		P: require("../pieces/wP.png"),
		Q: require("../pieces/wQ.png"),
		R: require("../pieces/wR.png"),
	},
};

const styles = StyleSheet.create({
	pieces: {
		width: 50,
		height: 50,
	},
});
