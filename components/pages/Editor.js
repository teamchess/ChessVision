import React from "react";
import { StyleSheet, Dimensions, Clipboard, TouchableOpacity, View, Text, Image } from "react-native";

import Board from "../board/Board";

const FEN_DEFAULT = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      certainty: null,
      fen: FEN_DEFAULT,
      buttonPressed: false
    };
  }

  render() {
    return (
      <View styles={styles.container}>
        <Board style={styles.board} fen={this.state.fen} />
        <FenDisplay fen={this.state.fen} />
      </View>
    );
  }
}

const FenDisplay = props => {
  return (
    <View style={styles.fenDisplay}>
      <Text style={styles.fenText} numberOfLines={1} ellipsizeMode='tail'>{props.fen}</Text>
      <View style={styles.iconWrapper}>
        <TouchableOpacity onPress={() => Clipboard.setString(props.fen)}>
          <Image style={styles.copyIcon} source={require("../../assets/icons/copy.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    marginTop: Dimensions.get("window").height * 0.13
  },
  fenDisplay: {
    width: Dimensions.get("window").width * 0.896,
    marginTop: Dimensions.get("window").height * 0.03,
    height: 40,
    backgroundColor: "#373737",
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 1,
      height: 1.5
    },
    shadowRadius: 3
  },
  fenText: {
    flex: 0.87,
    color: "#8E8E93",
    fontSize: 15,
    paddingRight: 10,
    paddingLeft: 10,
    lineHeight: 40
  },
  iconWrapper: {
    flex: 0.13,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 3,
    borderLeftWidth: 0.75,
    borderLeftColor: "#272727"
  },
  copyIcon: {
    height: 23,
    resizeMode: "contain",
    tintColor: "#8E8E93",
  }
});
