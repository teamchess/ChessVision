import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import { Permissions, ImagePicker } from "expo";

import Board from "./components/Board";
import Button from "./components/Button";

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

		this.sendImage = this.sendImage.bind(this);
	}

	pickImage = async () => {
		const { status: cameraRollPerm } = await Permissions.askAsync(
			Permissions.CAMERA_ROLL
		);

		// only if user allows permission to camera roll
		if (cameraRollPerm === "granted") {
			let pickerResult = await ImagePicker.launchImageLibraryAsync({
				base64: true,
				aspect: [1, 1],
			});

			this.setState(
				{
					image: pickerResult.base64,
					buttonPressed: true,
				},
				() => {
					this.sendImage();
				}
			);
		}
	};

	takePhoto = async () => {
		const { status: cameraPerm } = await Permissions.askAsync(
			Permissions.CAMERA
		);

		const { status: cameraRollPerm } = await Permissions.askAsync(
			Permissions.CAMERA_ROLL
		);

		// only if user allows permission to camera AND camera roll
		if (cameraPerm === "granted" && cameraRollPerm === "granted") {
			let pickerResult = await ImagePicker.launchCameraAsync({
				base64: true,
				aspect: [1, 1],
			});

			this.setState(
				{
					image: pickerResult.base64,
					buttonPressed: true,
				},
				() => {
					this.sendImage();
				}
			);
		}
	};

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
				<Board fen={this.state.fen} />

				<Text>{this.state.message || this.state.fen}</Text>
				<Text>{this.state.certainty}</Text>
				<Button onPress={this.pickImage} title="Upload Image" />
				<Button onPress={this.takePhoto} title="Take Photo" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		backgroundColor: "#fff",
		alignItems: "center",
		alignContent: "center",
		justifyContent: "center",
	},
	fen: {
		width: "75%",
		height: "25%",
		textAlign: "center",
		borderRadius: 30,
		borderWidth: 2,
	},
	fenString: {
		width: "60%",
		color: "white",
		fontSize: 24,
		textAlign: "center",
		marginLeft: "20%",
	},
});
