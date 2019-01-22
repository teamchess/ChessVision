import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Clipboard,
	ActivityIndicator,
} from "react-native";
import { Permissions, ImagePicker } from "expo";

import Board from "./components/Board";
import Button from "./components/Button";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			image: null,
			certainty: null,
			fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
			buttonPressed: false,
		};

		this.sendImage = this.sendImage.bind(this);
		this.copyToClipboard = this.copyToClipboard.bind(this);
	}

	pickImage = async () => {
		const { status: cameraRollPerm } = await Permissions.askAsync(
			Permissions.CAMERA_ROLL
		);

		// only if user allows permission to camera roll
		if (cameraRollPerm === "granted") {
			let pickerResult = await ImagePicker.launchImageLibraryAsync({
				base64: true,
				allowsEditing: true,
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
				allowsEditing: true,
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
				this.setState({ fen: body.fen, certainty: body.certainty })
			)
			.catch((x) => console.log(x));
	}

	copyToClipboard() {
		Clipboard.setString(this.state.fen);
		alert(
			"Copied FEN to clipboard. Now you can paste this into any Chess engine and it will show you the board!"
		);
		console.log("FEN copied to clipboard");
	}

	loadingIndicator() {
		return (
			<>
				<ActivityIndicator
					size="large"
					color="black"
					style={{ marginTop: "20%" }}
				/>
			</>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Board fen={this.state.fen} />
				{/* <View style={styles.fen}>
          <Text
            style={{
              fontSize: 18,
              color: "black",
              marginLeft: "17%",
              width: "100%"
            }}
          >
            FEN: (click to copy to clipboard)
          </Text>
          <TouchableOpacity
            onPress={this.copyToClipboard}
            style={styles.clipboard}
          >
            {!this.state.buttonPressed
              ? <Text style={styles.fenString}>{this.state.fen}</Text>
              : this.loadingIndicator()}
          </TouchableOpacity>
        </View>
				<Text style={styles.certainty}>certainty: {this.state.certainty}</Text> */}
				<Text>{this.state.fen}</Text>
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
	clipboard: {
		width: "90%",
		height: "80%",
		borderRadius: 30,
		marginLeft: "5%",
		backgroundColor: "grey",
		color: "#f0f5f5",
		textAlignVertical: "center",
	},
	fenString: {
		width: "60%",
		color: "white",
		fontSize: 24,
		textAlign: "center",
		marginLeft: "20%",
	},
});
