import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Piece from "./Piece";

export default class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<View style={this.props.color} key={this.props.coord}>
				<Text>{this.props.coord}</Text>
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
