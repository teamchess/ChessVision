import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { Camera, Permissions } from "expo";
import { Ionicons } from "@expo/vector-icons";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class Scan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      photo: null,
    };
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" }); //If status is true, the camera permissions will be enabled
  }
  async captureImage() {
    this.camera.takePictureAsync({onPictureSaved: this.onPictureSaved});
    console.log("Image captured!");

    
  }
 onPictureSaved = async (photo) => {
  console.log("Picture saved!");
 }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } 
      return (
        <View>
          <Camera style={styles.preview} ref={camera => (this.camera = camera)}>
            <View style={styles.topToolbar}>
              <TouchableOpacity>
                <Ionicons name="ios-arrow-round-back" size={25} color="white">{"  "}Back</Ionicons>
              </TouchableOpacity>
            </View>
            <View style={styles.cameraToolbar}>
              <TouchableOpacity
                style={styles.capture}
                onPress={this.captureImage}
              >
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
    marginTop: winHeight - 200
  },
  topToolbar: {
    marginTop: 50,
    marginLeft: 30,
    borderRadius: 30,
  }
});
