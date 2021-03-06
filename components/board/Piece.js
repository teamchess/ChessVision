import React from "react";
import { StyleSheet, Image, TouchableHighlight } from "react-native";

export const PIECES = {
	bishop: require("../../assets/pieces/bishop.png"),
	king: require("../../assets/pieces/king.png"),
	knight: require("../../assets/pieces/knight.png"),
	pawn: require("../../assets/pieces/pawn.png"),
	queen: require("../../assets/pieces/queen.png"),
	rook: require("../../assets/pieces/rook.png"),
};

export default class Piece extends React.Component {
	isBlack() {
		return this.props.number > 10;
	}
	getPieceImage(num) {
		// Subtract 10 if the number is black
		const n = this.isBlack() ? num - 10 : num;

		const { bishop, king, knight, pawn, queen, rook } = PIECES;

		switch (n) {
			case 0:
				return;
			case 1:
				return rook;
			case 2:
				return knight;
			case 3:
				return bishop;
			case 4:
				return queen;
			case 5:
				return king;
			case 6:
				return pawn;
			default:
				throw `ERROR: Unrecognizable Piece (${n})`;
		}
	}

	render() {
		return (
			<TouchableHighlight
				style={{ height: "100%", width: "100%" }}
				onPress={() => {
					console.log("A chess piece has been pressed");
				}}
			>
				<Image
					on
					source={this.getPieceImage(this.props.number)}
					style={{
						...styles.pieces,
						height:
							this.props.number === 6 || this.props.number === 16
								? "70%"
								: "85%",
						tintColor: this.isBlack() ? null : "white",
						bottom:
							this.props.number === 6 || this.props.number === 16
								? "-18%"
								: "-5%",
					}}
				/>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	pieces: {
		resizeMode: "contain",
		alignSelf: "center",
	},
});
