import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Pieces from "./Piece";

export default class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<View style={this.props.color}>
				<Pieces />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	square: {
		height: 30,
		width: 30,
	},
	lightSquare: {},
	darkSquare: {},
});
