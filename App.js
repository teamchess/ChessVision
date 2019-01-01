import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Permissions, ImagePicker, FileSystem } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      certainty: null,
      fen: null
    };

    // Properly requests permission to access the Camera Roll
    this.sendImage = this.sendImage.bind(this);
  }

  pickImage = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera roll
    if (cameraRollPerm === "granted") {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        base64: true,
        allowsEditing: true,
        aspect: [1, 1]
      });

      this.setState({
        image: pickerResult.base64
      }, () => {
        this.sendImage()
      });
    }
  };

  takePhoto = async () => {
    const { status: cameraPerm } = await Permissions.askAsync(Permissions.CAMERA);

    const { status: cameraRollPerm } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === "granted" && cameraRollPerm === "granted") {
      let pickerResult = await ImagePicker.launchCameraAsync({
        base64: true,
        allowsEditing: true,
        aspect: [1, 1]
      });

      this.setState({
        image: pickerResult.base64
      }, () => {
        this.sendImage()
      });
    }
  };

  sendImage() {
    // change to 162.243.160.170 in production
    fetch("http://192.168.1.14:3000", {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        image: this.state.image
      })
    })
    .then(resp => resp.json())
    .then(body => this.setState({ fen: body.fen, certainty: body.certainty}))
    .catch(x => console.log(x))
  };

  displayFenAndCertainty() {
    return (
      <>
        <Text>certainty: {this.state.certainty}</Text>
        <Text>fen: {this.state.fen}</Text>
      </>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Upload image" onPress={this.pickImage} />
        {this.state.image && <Image source={{ uri: `data:image/jpg;base64,${this.state.image}` }} style={{ width: 200, height: 200 }} />}
        <Button title="Take Photo" onPress={this.takePhoto} />
        {this.displayFenAndCertainty()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
