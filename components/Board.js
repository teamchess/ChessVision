import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Row from "./Row";

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [],
		};
	}
	componentWillMount() {
		this.renderBoard();
	}
	renderBoard() {
		for (let i = 0; i < 8; i++) {
			if (i % 2) {
				this.state.board.push(<Row direction={styles.board} />);
			} else {
				this.state.board.push(<Row direction={styles.boardReverse} />);
			}
		}
	}
	render() {
		return <View style={styles.container}>{this.state.board}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
	},
	board: {
		display: "flex",
		flexDirection: "row",
	},
	boardReverse: {
		display: "flex",
		flexDirection: "row-reverse",
	},
	chessCell: {},
	coordinates: {
		color: "white",
	},
});
