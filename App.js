import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Board from "./components/board/Board";
import Button from "./components/ui/Button";
import Toolbar from "./components/ui/Toolbar";

const FEN_DEFAULT = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			image: null,
			certainty: null,
			fen: FEN_DEFAULT,
			buttonPressed: false,
		};
	}
	sendImage() {
		fetch("https://api.ronlaniado.me/", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				image: this.state.image,
			}),
		})
			.then((resp) => resp.json())
			.then((body) =>
				this.setState({
					error: body.message || null,
					fen: body.fen || FEN_DEFAULT,
					certainty: body.certainty,
				})
			)
			.catch((x) => console.log(x));
	}

	render() {
		return (
			<View style={styles.container}>
				<Board fen={FEN_DEFAULT} />
				<Toolbar />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#272727",
		width: "100%",
		height: "100%",
	},
});
