import React from "react";
import { View, StyleSheet } from "react-native";
import Square from "./Square";

export default class Row extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: [],
			letters: ["a", "b", "c", "d", "e", "f", "g", "h"],
			currentRow: 1,
		};
	}
	componentWillMount() {
		this.renderRow();
	}

	renderRow() {
		this.setState({ currentRow: this.state.currentRow + 1 });
		for (let i = 0; i < 8; i++) {
			if (i % 2) {
				this.state.squares.push(
					<Square
						color={styles.lightCell}
						coord={
							this.state.currentRow + this.state.letters[i] + ""
						}
					/>
				);
			} else {
				this.state.squares.push(
					<Square
						color={styles.darkCell}
						coord={this.state.currentRow + this.state.letters[i]}
					/>
				);
			}
			console.log(this.state.squares);
		}
	}
	render() {
		return <View style={this.props.direction}>{this.state.squares}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
	},
	lightCell: {
		width: 50,
		height: 50,
		backgroundColor: "#7596B2",
	},
	darkCell: {
		width: 50,
		height: 50,
		backgroundColor: "#4B789F",
	},
});
