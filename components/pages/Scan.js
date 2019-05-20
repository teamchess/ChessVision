import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { ImagePicker, Permissions } from "expo";

const WIDTH = Dimensions.get("window").width,
	HEIGHT = Dimensions.get("window").height;

export default class Scan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null
    };
  }
  async componentDidMount() {
    this.pickImage();
  }
  pickImage = async () => {
    let picker = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })
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
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  camera: {
    height: "100%",
    width: "100%",
  },
  capture: {
    justifyContent: "center",
    alignSelf: "center",
    height: 70,
    width: 70,
    backgroundColor: "white",
    borderRadius: 30,
    marginTop: HEIGHT - 150,
  }
});
