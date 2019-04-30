import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import Piece from "./Piece";

/**
 * Will take in coords and piece.
 */
export default class Square extends React.Component {
  isDarkSquare() {
    const { x, y } = this.props.coords;
    return (y % 2 == 0 && x % 2 !== 0) || (y % 2 !== 0 && x % 2 === 0);
	}
	
	isSelected() {
		const { x: sX, y: sY } = this.props.selectedCoords;
		const { x, y} = this.props.coords;

		return x === sX && y === sY
	}

  render() {
    return (
      <TouchableHighlight
        style={{ ...styles.square,
					backgroundColor: this.isDarkSquare() ? "#1B595C" : "#8E8E93" }}
        onPressIn={() => {
          this.props.setSelected(this.props.coords)
        }}
      >
          <Piece number={this.props.piece} isVisible={!this.isSelected()} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});
