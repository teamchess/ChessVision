import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Picker } from "react-native";
import Modal from "react-native-modal";
import RNPickerSelect from "react-native-picker-select";
import Button from "../ui/Button";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    return (
      <View style={styles.container}>
        <SettingsModal
          modalVisible={this.state.modalVisible}
          toggleModal={this.toggleModal}
        />
        <TouchableOpacity style={styles.white} />
        <View style={styles.buttons}>
          <Button source={require("../../assets/icons/reset.png")} />
          <Button source={require("../../assets/icons/pause.png")} />
          <Button
            source={require("../../assets/icons/settings.png")}
            onPress={() => this.toggleModal()}
          />
        </View>
        <TouchableOpacity style={styles.black} />
      </View>
    );
  }
}

const SettingsModal = props => {
  let clockStyle = "";
  const placeholder = {
    label: "Select a clock type...",
    value: null
  };
  const clockStyles = [
    {
      label: "Sudden Death",
      value: "sudden_death"
    },
    {
      label: "Increment",
      value: "increment"
    },
    {
      label: "Increment with Handicap",
      value: "increment_with_handicap"
    }
  ];
  return (
    <Modal
      isVisible={props.modalVisible}
      onBackButtonPress={props.toggleModal}
      onBackdropPress={props.toggleModal}
      onSwipe={props.toggleModal}
      swipeDirection="down"
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <View style={styles.modal}>
        <Text style={styles.title}>Clock Settings</Text>
        <RNPickerSelect
          placeholder={placeholder}
          items={clockStyles}
          onValueChange={value => {
            clockStyle = value;
          }}
          style={pickerSelectStyles.inputAndroid}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  white: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    marginTop: 50,
    height: 350,
    width: 400,
    backgroundColor: "white",
    borderRadius: 5
  },
  modal: {
    height: 500,
    width: 400,
    backgroundColor: "#272727",
    color: "white",
	borderRadius: 5,
	fontSize: 22,
  },
  title: {
    marginTop: 35,
    marginLeft: 25,
    fontSize: 24,
    color: "#8e8e93"
  },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'blue',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
