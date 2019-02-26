import React from "react";
import {View, StyleSheet, Text, Picker} from "react-native";
import Modal from "react-native-modal";
import SuddenDeath from "../ui/SuddenDeath";
import Increment from "../ui/Increment";
import IncrementWithHandicap from "./IncrementWithHandicap";

export default class SettingsModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clockStyle: "Please select a clock style...",
		};
	}
	showSuddenDeathSettings() {
		if (this.state.clockStyle === "sudden_death") {
			return <SuddenDeath />;
		}
	}
	showIncrementSettings() {
		if (this.state.clockStyle === "increment") {
			return (
				<>
					<SuddenDeath />
					<Increment />
				</>
			);
		}
	}
	showIncrementWithHandicapSettings() {
		if (this.state.clockStyle === "increment_with_handicap") {
			return (
				<>
					<IncrementWithHandicap />
				</>
			);
		}
	}
	render() {
		return (
			<View>
				<Modal
					isVisible={this.props.modalVisible}
					onBackButtonPress={this.props.toggleModal}
					onBackdropPress={this.props.toggleModal}
					onSwipe={this.props.toggleModal}
					swipeDirection='down'
					animationIn='zoomIn'
					animationOut='zoomOut'>
					<View style={styles.modal}>
						<Text style={styles.title}>Clock Settings</Text>
						<View style={styles.picker}>
							<Picker
								selectedValue={this.state.clockStyle}
								onValueChange={(itemValue, itemIndex) => {
									if (itemValue != "default") {
										this.setState({
											clockStyle: itemValue,
										});
									}
								}}>
								<Picker.Item
									label='Select a clock type...'
									value='default'
								/>
								<Picker.Item
									label='Sudden Death'
									value='sudden_death'
								/>
								<Picker.Item
									label='Increment'
									value='increment'
								/>
								<Picker.Item
									label='Increment with Handicap'
									value='increment_with_handicap'
								/>
							</Picker>
						</View>
						{this.showSuddenDeathSettings()}
						{this.showIncrementSettings()}
						{this.showIncrementWithHandicapSettings()}
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	modal: {
		display: "flex",
		height: 500,
		width: 400,
		backgroundColor: "#272727",
		color: "white",
		borderRadius: 5,
		fontSize: 22,
	},
	title: {
		marginTop: 35,
		marginLeft: 25,
		fontSize: 24,
		color: "#8e8e93",
	},
	picker: {
		justifyContent: "center",
		alignContent: "center",
		backgroundColor: "#8e8e93",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#8e8e93",
		marginLeft: "10%",
		marginRight: "10%",
		marginTop: "5%",
	},
	sliderContainer: {
		marginTop: "5%",
		flexDirection: "column",
		justifyContent: "center",
	},
	slider: {
		marginLeft: "10%",
		marginRight: "10%",
	},
	sliderText: {color: "#8e8e93", marginLeft: "10%", bottom: -10},
});
