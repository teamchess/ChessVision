import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import styles from "../../styles/ui";

export default (props) => {
	return (
		<TouchableOpacity
			style={{ ...styles.button, ...props.style }}
			onPress={props.onPress}
		>
			<Image source={props.source} style={styles.icon} />
			<Text style={styles.buttonText}>{props.children}</Text>
		</TouchableOpacity>
	);
};
