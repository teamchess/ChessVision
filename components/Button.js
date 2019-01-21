import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
				<Text style={styles.buttonText}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	button: {
		backgroundColor: "#0088cc",
		width: "75%",
		height: 50,
		borderRadius: 15,
		padding: 10,
		marginTop: 25,
		justifyContent: "center"
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});
