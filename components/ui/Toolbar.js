import React from "react";
import { StyleSheet, Dimensions, View, TouchableOpacity, Image, Text } from "react-native";
import { withRouter } from "react-router-native";

export default class Toolbar extends React.Component {
  render() {
    return (
      <View style={styles.outer}>
        <Item title={"Editor"} image={require("../../assets/icons/editor.png")} />
        <Item title={"Analysis"} image={require("../../assets/icons/analysis.png")} />
        <Item title={"Scan"} image={require("../../assets/icons/scan.png")} />
        <Item title={"Clock"} image={require("../../assets/icons/clock.png")} />
        <Item title={"Profile"} image={require("../../assets/icons/profile.png")} />
      </View>
    );
  }
}

const Item = withRouter(props => {
  const { title, image, location, history } = props;
  const itemPath = `/${title.toLowerCase()}`;

  const isSelected = () => {
    return location.pathname === itemPath;
  };

  return (
    <TouchableOpacity style={styles.item} onPress={() => history.push(itemPath)}>
      <Image style={styles.image} source={image} />
      <Text style={{ ...styles.text, color: isSelected() ? "#FFFFFF" : "#8E8E93" }}>{title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.9,
    bottom: 26
  },
  item: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginTop: 2,
    fontSize: 11
  },
  image: {
    height: 24,
    resizeMode: "contain"
  }
});
