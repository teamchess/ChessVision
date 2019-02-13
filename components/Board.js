import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Square from "./Square";
import { parseFEN } from "../Utils";

export default class Board extends React.Component {
	flipBoard = (boardArray) => {
		return boardArray.map((subArray) => subArray.reverse()).reverse();
	};
	render() {
		const board = parseFEN(this.props.fen);
		return (
			<View style={styles.board}>
				{board.map((_, yIndex) => {
					return (
						<View style={styles.row} key={yIndex}>
							{board[yIndex].map((piece, xIndex) => {
								return (
									<Square
										piece={piece}
										coords={{ y: yIndex, x: xIndex }}
										key={`${(yIndex, xIndex)}`}
									/>
								);
							})}
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	board: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").width,
	},
	row: {
		flex: 1,
		flexDirection: "row",
	},
});
