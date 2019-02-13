import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<TouchableOpacity
				style={styles.button}
				onPress={this.props.onPress}
			>
				<Text style={styles.buttonText}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	button: {
		backgroundColor: "#373737",
		marginTop: 300,
		marginRight: 100,
		borderRadius: 10,
		height: 100,
		width: 100,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});
