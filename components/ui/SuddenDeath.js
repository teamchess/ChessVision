import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "react-native-slider";

export default class SuddenDeath extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeVal: 5,
		};
	}
	render() {
		return (
			<View style={styles.sliderContainer}>
				<Text style={styles.sliderText}>
					Time for each side: {parseInt(this.state.timeVal)} mins
				</Text>
				<Slider
					style={styles.slider}
					value={this.state.timeVal}
					onValueChange={(val) => {this.setState({timeVal: val})}}
					minimumValue={1}
					maximumValue={360}
					minimumTrackTintColor="#1fb28a"
					maximumTrackTintColor="#d3d3d3"
					thumbTintColor="#1a9274"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
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
