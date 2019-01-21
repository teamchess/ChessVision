import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Piece from "./Piece";

/**
 * Will take in coords and piece.
 * 
 * Board:[
 * [1, 2, 3, 4, 5, 3, 2, 1],
 * [6, 6, 6, 6, 6, 6, 6, 6],
 * [0, 0, 0, 0, 0, 0, 0, 0],
 * [0, 0, 0, 0, 0, 0, 0, 0],
 * [16, 16, 16, 16, 16, 16, 16, 16],
 * [11, 12, 13, 14, 15, 13, 12, 11]]
 */
export default class Square extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View style={styles.square}>
				<Piece number={this.props.piece} />
				<Text>{this.props.coord}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	square: {
		height: 1,
		backgroundColor: "#F8F8F8"
	},
	lightSquare: {},
	darkSquare: {},
});
