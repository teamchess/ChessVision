import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Square from "./Square";
import { parseFEN } from "../../Utils";

export default props => {
  const { flip, fen } = props;
  const board = parseFEN(fen);

  return (
    <View style={{ ...styles.board, flexDirection: flip ? "column-reverse" : "column", ...props.style }}>
      {board.map((_, yIndex) => (
        <View style={{ ...styles.row, flexDirection: flip ? "row-reverse" : "row" }} key={yIndex}>
          {board[yIndex].map((piece, xIndex) => (
            <Square piece={piece} coords={{ y: yIndex, x: xIndex }} key={`${(yIndex, xIndex)}`} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: Dimensions.get("window").width * 0.95,
    height: Dimensions.get("window").width * 0.95
  },
  row: {
    flex: 1
  }
});
