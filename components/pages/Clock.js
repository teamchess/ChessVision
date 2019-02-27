import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Picker} from "react-native";
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
		this.setState({modalVisible: !this.state.modalVisible});
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
		position: "absolute",
		marginTop: "17%",
		height: 350,
		width: "90%",
		marginLeft: "5%",
		marginRight: "5%",
		justifyContent: "flex-start",
		backgroundColor: "white",
		borderRadius: 5,
	},
	black: {
		position: "absolute",
		bottom: 85,
		height: 350,
		width: "90%",
		backgroundColor: "black",
		borderRadius: 5,
		marginLeft: "5%",
		marginRight: "5%",
	},
});
