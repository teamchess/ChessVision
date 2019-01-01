import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Permissions, ImagePicker } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null
    };

    // Properly requests permission to access the Camera Roll
  }

  pickImage = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    // only if user allows permission to camera roll
    if (cameraRollPerm === "granted") {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1]
      });

      this.setState({
        image: pickerResult.base64
      });

      this.sendImage(pickerResult);
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
        allowsEditing: true,
        aspect: [1, 1]
      });

      this.setState({
        image: pickerResult.base64      
      });

      this.sendImage(pickerResult);
    }
  };

  sendImage = pickerResult => {
    // change to 162.243.160.170 in production
    fetch("https://174.44.204.55:3000/", {
      method: "POST",
      body: pickerResult
    })
      .then(response => response.json())
      .catch(error => console.log("Error:", error))
      .then(response => console.log("Success:", JSON.stringify(response)));
  };

  render() {
    let { image } = this.state;
    console.log(image);
    return (
      <View style={styles.container}>
        <Button title="Upload image" onPress={this.pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <Button title="Take Photo" onPress={this.takePhoto} />
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
