import React from "React";
import {View, Text, StyleSheet} from "react-native";
import Slider from "react-native-slider";

export default class IncrementWithHandicap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			darkTime: 5,
			lightTime: 5,
			darkIncrement: 5,
			lightIncrement: 5,
		};
	}
	render() {
		return (
			<View>
				<View style={{marginTop: 15}}>
					<Text style={styles.sliderText}>
						Time for light-square side:{" "}
						{parseInt(this.state.lightTime)} mins
					</Text>
					<Slider
						style={styles.slider}
						value={this.state.lightTime}
						onValueChange={(val) => {
							this.setState({lightTime: val});
						}}
						minimumValue={1}
						maximumValue={360}
						minimumTrackTintColor='#1fb28a'
						maximumTrackTintColor='#d3d3d3'
						thumbTintColor='#1a9274'
					/>
					<Text style={styles.sliderText}>
						Increment light-square side by:{" "}
						{parseInt(this.state.lightIncrement) + " "}
						seconds
					</Text>
					<Slider
						style={styles.slider}
						value={this.state.lightIncrement}
						onValueChange={(val) => {
							this.setState({lightIncrement: val});
						}}
						minimumValue={1}
						maximumValue={360}
						minimumTrackTintColor='#1fb28a'
						maximumTrackTintColor='#d3d3d3'
						thumbTintColor='#1a9274'
					/>
				</View>
				<View style={{marginTop: 35}}>
					<Text style={styles.sliderText}>
						Time for dark-square side:{" "}
						{parseInt(this.state.darkTime)} mins
					</Text>
					<Slider
						style={styles.slider}
						value={this.state.darkTime}
						onValueChange={(val) => {
							this.setState({darkTime: val});
						}}
						minimumValue={1}
						maximumValue={360}
						minimumTrackTintColor='#1fb28a'
						maximumTrackTintColor='#d3d3d3'
						thumbTintColor='#1a9274'
					/>
					<Text style={styles.sliderText}>
						Increment dark-square side by:{" "}
						{parseInt(this.state.darkIncrement) + " "}
						seconds
					</Text>
					<Slider
						style={styles.slider}
						value={this.state.darkIncrement}
						onValueChange={(val) => {
							this.setState({darkIncrement: val});
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
