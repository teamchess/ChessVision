import React from "react";
import { StyleSheet, Dimensions, View, Image, Text } from "react-native";

export default class Toolbar extends React.Component {
  render() {
    return (
      <View style={styles.outer}>
        <Item title={"Editor"} image={require("../../assets/icons/editor.png")} />
        <Item title={"Analysis"}image={require("../../assets/icons/analysis.png")} />
        <Item title={"Scan"} image={require("../../assets/icons/scan.png")} />
        <Item title={"Clock"} image={require("../../assets/icons/clock.png")} />
        <Item title={"Profile"} image={require("../../assets/icons/profile.png")} />
      </View>
    );
  }
}

const Item = props => {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={props.image} />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * .95,
    bottom: 25,
  }, 
  item: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 1,
    color: "#8e8e93",
    fontSize: 11
  },
  image: {
    height: 24,
    resizeMode: "contain"
  }
});
