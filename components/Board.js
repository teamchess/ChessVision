import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Square from "./Square";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingBoard: [
        [11, 12, 13, 14, 15, 13, 12, 11],
        [16, 16, 16, 16, 16, 16, 16, 16],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [6, 6, 6, 6, 6, 6, 6, 6],
        [1, 2, 3, 4, 5, 3, 2, 1]
      ]
    };
  }

  render() {
    return (
      <View style={styles.board}>
        {this.state.startingBoard.map((_, yIndex) => {
          return (
            <View style={styles.row} key={yIndex}>
              {this.state.startingBoard[yIndex].map((piece, xIndex) => {
                return <Square piece={piece} coords={{y: yIndex, x: xIndex}} key={`${(yIndex, xIndex)}`} />;
              })}
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").width,
	},
	row: {
		flex: 1,
		flexDirection: "row" 
	}
});
