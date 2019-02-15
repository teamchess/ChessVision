import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Piece from "./Piece";

/**
 * Will take in coords and piece.
 */
export default class Square extends React.Component {
	isDarkSquare() {
		const { x, y } = this.props.coords;
		return (y % 2 !== 0 && x % 2 !== 0) || (y % 2 === 0 && x % 2 === 0);
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
				{this.props.coords.x === 0 ? (
					<Text style={styles.vertCoords}>
						{Math.abs(8 - this.props.coords.y)}
					</Text>
				) : (
					<Text />
				)}
				{this.props.coords.y === 7 ? (
					<Text style={styles.horiCoords}>
						{letters[this.props.coords.x]}
					</Text>
				) : (
					<Text />
				)}
				<Piece number={this.props.piece} />
			</View>
		);
	}
}

//Letters variable is used for rendering the bottom letters row
const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const styles = StyleSheet.create({
	square: {
		flex: 1,
	},
	vertCoords: {
		color: "#c4c4c4",
		position: "absolute",
		fontSize: 12,
		marginLeft: 2,
	},
	horiCoords: {
		color: "#c4c4c4",
		position: "absolute",
		fontSize: 12,
		bottom: 0,
		right: 0,
		marginRight: 2,
	},
});
