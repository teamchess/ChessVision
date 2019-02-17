import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ModalSelector from 'react-native-modal-selector'
import Modal from "react-native-modal";
import Button from "../ui/Button";

export default class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			clockStyle: "",
		};
	}
	toggleModal() {
		this.setState({ modalVisible: !this.state.modalVisible });
	}

	render() {
    const data = [
      { key: index++, section: true, label: 'Fruits' },
      { key: index++, label: 'Red Apples' },
      { key: index++, label: 'Cherries' },
      { key: index++, label: 'Cranberries', accessibilityLabel: 'Tap here for cranberries' },
      // etc...
      // Can also add additional custom keys which are passed to the onChange callback
      { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
    ];
		return (
			<View style={styles.container}>
				<Modal
					isVisible={this.state.modalVisible}
					onBackButtonPress={() => this.toggleModal()}
					onBackdropPress={() => this.toggleModal()}
					onSwipe={() => this.toggleModal()}
					swipeDirection="down"
				>
					<View style={styles.modal}>
						<Text
							style={{
								marginTop: 35,
								marginLeft: 25,
								fontSize: 24,
								color: "#8e8e93",
							}}
						>
							Clock Settings
						</Text>
						<View style={styles.pickerContainer}>
              <ModalSelector
                data={data}
                initValue="Select clock style" />

						</View>
					</View>
				</Modal>
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
		marginTop: 50,
		height: 350,
		width: 400,
		backgroundColor: "white",
		borderRadius: 5,
	},
	modal: {
		height: 500,
		width: 400,
		backgroundColor: "#272727",
		color: "white",
		borderRadius: 5,
	},
  pickerContainer: {
		marginTop: 15,
		marginLeft: 50,
		height: 50,
		width: 200,
		backgroundColor: "#8e8e93",
		borderColor: "#8E8E93",
		borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
	},
	picker: {
		color: "#272727",
	},
	pickerItem: {
		textAlign: "center",
	},
});
