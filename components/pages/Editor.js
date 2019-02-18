import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Button from "../ui/Button";

import Board from "../board/Board";

const FEN_DEFAULT = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

export default class Editor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			image: null,
			certainty: null,
			fen: FEN_DEFAULT,
			buttonPressed: false,
		};
	}

	render() {
		return (
			<View styles={styles.container}>
				<Board style={styles.board} fen={this.state.fen} />
				<View style={styles.buttons}>
					<Button
						source={require("../../assets/icons/reverse.png")}
					/>
					<Button source={require("../../assets/icons/reset.png")} />
					<Button source={require("../../assets/icons/save.png")} />
					<Button source={require("../../assets/icons/upload.png")} />
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	board: {
		marginTop: Dimensions.get("window").height * 0.16,
	},
	buttons: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginTop: 30,
	},
});
