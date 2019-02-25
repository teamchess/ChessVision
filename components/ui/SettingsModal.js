import React from "react";
import { View, StyleSheet, Text, Picker } from "react-native";
import Modal from "react-native-modal";
import Slider from "react-native-slider";

export default class SettingsModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clockStyle: "Please select a clock style...",
			incrementVal: 5,
			timeVal: 5,
		};
	}
	sliderChangeIncrement(value) {
		this.setState({
			incrementVal: value,
		});
	}
	sliderChangeTime(value) {
		this.setState({
			timeVal: value,
		});
	}
	showSuddenDeathSettings() {
		if (this.state.clockStyle === "sudden_death") {
			return (
				<SuddenDeath
					timeVal={this.state.timeVal}
					sliderChangeTime={(value) => this.sliderChangeTime(value)}
				/>
			);
		}
	}
	showIncrementSettings() {
		if (this.state.clockStyle === "increment") {
			return (
				<Increment
					incrementVal={this.state.incrementVal}
					timeVal={this.state.incrementVal}
					sliderChangeTime={(value) => this.sliderChangeTime(value)}
					sliderChangeIncrement={(value) =>
						this.sliderChangeIncrement(value)
					}
				/>
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
					swipeDirection="down"
					animationIn="zoomIn"
					animationOut="zoomOut"
				>
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
								}}
							>
								<Picker.Item
									label="Select a clock type..."
									value="default"
								/>
								<Picker.Item
									label="Sudden Death"
									value="sudden_death"
								/>
								<Picker.Item
									label="Increment"
									value="increment"
								/>
								<Picker.Item
									label="Increment with Handicap"
									value="increment_with_handicap"
								/>
							</Picker>
						</View>
						{this.showSuddenDeathSettings()}
						{this.showIncrementSettings()}
					</View>
				</Modal>
			</View>
		);
	}
}

const SuddenDeath = (props) => {
	return (
		<View>
			<View style={styles.sliderContainer}>
				<Text style={styles.sliderText}>
					Time for each side: {parseInt(props.timeVal)} mins
				</Text>
				<Slider
					style={styles.slider}
					value={props.timeVal}
					onValueChange={props.sliderChangeTime}
					minimumValue={1}
					maximumValue={360}
					minimumTrackTintColor="#1fb28a"
					maximumTrackTintColor="#d3d3d3"
					thumbTintColor="#1a9274"
				/>
			</View>
		</View>
	);
};

const Increment = (props) => {
	return (
		<View>
			<SuddenDeath
				timeVal={props.timeVal}
				sliderChangeTime={props.sliderChangeTime}
			/>
			<View style={styles.sliderContainer}>
				<Text style={styles.sliderText}>
					Increment by: {parseInt(props.incrementVal)} seconds
				</Text>
				<Slider
					style={styles.slider}
					value={props.incrementVal}
					onValueChange={props.sliderChangeIncrement}
					minimumValue={1}
					maximumValue={360}
					minimumTrackTintColor="#1fb28a"
					maximumTrackTintColor="#d3d3d3"
					thumbTintColor="#1a9274"
				/>
			</View>
		</View>
	);
};

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
	sliderText: { color: "#8e8e93", marginLeft: "10%", bottom: -10 },
});
