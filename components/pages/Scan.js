import React from "react";
import { withRouter } from "react-router-native";

import { StyleSheet, Dimensions, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Camera, Permissions, FileSystem, ImagePicker } from "expo";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

class Scan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      photo: null,
      captureHidden: false
    };
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" }); //If status is true, the camera permissions will be enabled
  }

  captureImage = () => {
    this.setState({ captureHidden: true });
    this.camera.takePictureAsync({
      base64: true,
      onPictureSaved: this.onPictureSaved
    });
    console.log("Image captured!");
  };

  onPictureSaved = async photo => {
    sendImageToServer(photo.base64)
      .then(x => x.json())
      .then(x => this.props.history.push("/editor",  { fen: x.fen } ))
      .catch(x => console.log(x));
  };

  openGallery = async () => {
    let photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "Images",
      base64: true
    });

    sendImageToServer(photo.base64)
      .then(x => x.json())
      .then(x => this.props.history.push("/editor",  { fen: x.fen } ))
      .catch(x => console.log(x));
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View>
        {this.state.captureHidden ? <ActivityIndicator style={styles.spinner} size="large" color="white" /> : <></>}

        <Camera style={styles.preview} ref={camera => (this.camera = camera)}>
          <View style={styles.topToolbar}>
            <TouchableOpacity>
              <Ionicons name="ios-arrow-round-back" size={25} color="white">
                {"  "}Back
              </Ionicons>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openGallery} style={styles.gallery}>
              <SimpleLineIcons name="picture" size={40} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.cameraToolbar}>
            <TouchableOpacity style={styles.capture} onPress={this.captureImage} hide={true}>
              <Ionicons name="ios-radio-button-off" size={85} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    height: winHeight + 34,
    width: winWidth,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  capture: {
    justifyContent: "center",
    alignItems: "center"
  },
  cameraToolbar: {
    justifyContent: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
    width: "100%",
    marginTop: winHeight - 200
  },
  topToolbar: {
    marginTop: 50,
    marginLeft: 30,
    borderRadius: 30
  },
  spinner: {
    justifyContent: "center",
    alignItems: "center"
  },
  gallery: {
    flexDirection: "row",
    right: 35,
    alignSelf: "flex-end",
    height: 40,
    width: 40,
    position: "absolute"
  }
});

function sendImageToServer(base64) {
  return fetch("http://172.20.10.2:3000", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify({ image: base64 }) // body data type must match "Content-Type" heade
  }).catch(x => console.log(x));
}

export default withRouter(Scan);
