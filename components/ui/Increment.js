import React from "react";
import {View, StyleSheet, Text} from "react-native";
import Slider from "react-native-slider";

export default class Increment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			incrementVal: 5,
		};
	}
	render() {
		return (
			<View>
				<View style={styles.sliderContainer}>
					<Text style={styles.sliderText}>
						Increment by: {parseInt(this.state.incrementVal)}{" "}
						seconds
					</Text>
					<Slider
						style={styles.slider}
						value={this.state.incrementVal}
						onValueChange={(val) => {
							this.setState({incrementVal: val});
						}}
						minimumValue={1}
						maximumValue={360}
						minimumTrackTintColor='#1fb28a'
						maximumTrackTintColor='#d3d3d3'
						thumbTintColor='#1a9274'
					/>
				</View>
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
	sliderText: {color: "#8e8e93", marginLeft: "10%", bottom: -10},
});
