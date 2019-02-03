import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Piece from "./Piece";

/**
 * Will take in coords and piece.
 */
export default class Square extends React.Component {
	isDarkSquare() {
		const { x, y } = this.props.coords;
		console.log(this.props.coords);
		return (y % 2 !== 0 && x % 2 !== 0) || (y % 2 === 0 && x % 2 === 0);
	}

	render() {
		return (
			<View
				style={{
					...styles.square,
					backgroundColor: this.isDarkSquare()
						? "#eaeaea"
						: "#0c56ad",
				}}
			>
				{this.props.coords.x === 0 ? (
					<Text style={styles.coords}>{this.props.coords.y}</Text>
				) : (
					<Text />
				)}
				<Piece number={this.props.piece} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	square: {
		flex: 1,
	},
	coords: {
		color: "#c4c4c4",
		position: "absolute",
		fontSize: 12,
		padding: 0,
		margin: 0,
	},
});
