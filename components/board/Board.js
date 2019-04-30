import React from "react";
import { View, Dimensions, StyleSheet, PanResponder } from "react-native";
import Square from "./Square";
import { DraggablePiece } from "./Piece";
import { parseFEN } from "../../Utils";

export default class extends React.Component {
  render() {
    const { flip, fen } = this.props;
    const board = parseFEN(fen);

    return (
      <View
        style={{
          ...styles.board,
          flexDirection: flip ? "column-reverse" : "column",
          ...this.props.style
				}}
      >
        {board.map((_, yIndex) => (
          <View
            style={{
              ...styles.row,
              flexDirection: flip ? "row-reverse" : "row"
            }}
            key={yIndex}
          >
            {board[yIndex].map((piece, xIndex) => (
              <Square
                piece={piece}
                coords={{ y: yIndex, x: xIndex }}
                key={`${(yIndex, xIndex)}`}
              />
            ))}
          </View>
				))}
      </View>
    );
  }
}

const WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
  board: {
    width: WIDTH / 1.1,
    height: WIDTH / 1.1
  },
  row: {
    flex: 1
  }
});
