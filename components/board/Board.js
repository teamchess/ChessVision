import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Square from "./Square";
import { parseFEN } from "../../Utils";

export default props => {
  const board = parseFEN(props.fen);

  return (
    <View style={{ ...styles.board, ...props.style }}>
      {board.map((_, yIndex) => (
        <View style={styles.row} key={yIndex}>
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width
  },
  row: {
    flex: 1,
    flexDirection: "row"
  }
});
