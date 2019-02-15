import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

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
				<Image source={this.props.iconSource} style={styles.icon} />
				<Text style={styles.buttonText}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	button: {
		backgroundColor: "#373737",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		borderRadius: 10,
		height: 60,
		width: 60,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		position: "absolute",
	},
	icon: {
		height: 35,
		width: 35,
		position: "absolute",
		resizeMode: "contain",
	},
});
