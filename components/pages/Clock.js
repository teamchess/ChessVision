import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Picker } from "react-native";
import SettingsModal from "../ui/SettingsModal";
import Button from "../ui/Button";

export default class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
		};

		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState({ modalVisible: !this.state.modalVisible });
	}

	render() {
		return (
			<View style={styles.container}>
				<SettingsModal
					modalVisible={this.state.modalVisible}
					toggleModal={this.toggleModal}
				/>
				<TouchableOpacity style={styles.white} />
				<View style={styles.buttons}>
					<Button source={require("../../assets/icons/reset.png")} />
					<Button source={require("../../assets/icons/pause.png")} />
					<Button
						source={require("../../assets/icons/settings.png")}
						onPress={() => this.toggleModal()}
					/>
				</View>
				<TouchableOpacity style={styles.black} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
	buttons: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	white: {
		flex: 1,
		justifyContent: "center",
		position: "absolute",
		marginTop: 50,
		height: 350,
		width: 400,
		backgroundColor: "white",
		borderRadius: 5,
	},
});