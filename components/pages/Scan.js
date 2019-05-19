import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Camera, Permissions } from "expo";

export default class Scan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
    };
  }

  async componentDidMount() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" }); //If status is true, the camera permissions will be enabled
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1, height: 5, width: 500 }} type={Camera.Constants.Type.back} ratio="16:9" useCamera2Api={true}>
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
            <TouchableOpacity style={styles.capture}>
              <Text>Capture Photo</Text>
            </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  capture: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});