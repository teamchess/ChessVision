import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

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
        <Board fen={this.state.fen} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});