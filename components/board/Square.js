import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Piece from "./Piece";

/**
 * Will take in coords and piece.
 */
export default class Square extends React.Component {
	isDarkSquare() {
		const { x, y } = this.props.coords;
		return (y % 2 == 0 && x % 2 !== 0) || (y % 2 !== 0 && x % 2 === 0);
	}

	render() {
		return (
			<View
				style={{
					...styles.square,
					backgroundColor: this.isDarkSquare()
						? "#1B595C"
						: "#8E8E93",
				}}
			>
				<Piece number={this.props.piece} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	square: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center"
	},
});
