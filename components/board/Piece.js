import React from "react";
import { StyleSheet, Image, TouchableHighlight, PanResponder } from "react-native";

export const PIECES = {
  bishop: require("../../assets/pieces/bishop.png"),
  king: require("../../assets/pieces/king.png"),
  knight: require("../../assets/pieces/knight.png"),
  pawn: require("../../assets/pieces/pawn.png"),
  queen: require("../../assets/pieces/queen.png"),
  rook: require("../../assets/pieces/rook.png")
};

export default class Piece extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locationX: 0,
      locationY: 0,
      selected: false
    };

    this.panResponder;
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onStartShouldSetPanResponderCapture: (event, gestureState) => false,

      onPanResponderMove: (event, gestureState) => {
        this.setState({
          //After the change in the location
          //state will be upated to re-render the screen and show the location in view
          locationX: event.nativeEvent.locationX.toFixed(2),
          locationY: event.nativeEvent.locationY.toFixed(2)
        }, () => console.log("X: ", this.state.locationX, " Y:", this.state.locationY));
      }
    });
  }

  isBlack() {
    return this.props.number > 10;
  }

  getPieceImage(num) {
    // Subtract 10 if the number is black
    const n = this.isBlack() ? num - 10 : num;

    const { bishop, king, knight, pawn, queen, rook } = PIECES;

    switch (n) {
      case 0:
        return;
      case 1:
        return rook;
      case 2:
        return knight;
      case 3:
        return bishop;
      case 4:
        return queen;
      case 5:
        return king;
      case 6:
        return pawn;
      default:
        throw `ERROR: Unrecognizable Piece (${n})`;
    }
  }

  render() {
    return (
      <Image
        source={this.getPieceImage(this.props.number)}
        style={{
          ...styles.pieces,
          flex: 1,
          top: parseFloat(this.state.locationY) || null,
          left: parseFloat(this.state.locationX) || null,
          height: this.props.number === 6 || this.props.number === 16 ? "70%" : "85%",
          tintColor: this.isBlack() ? null : "white",
          bottom: parseFloat(this.state.locationX)
            ? null
            : this.props.number === 6 || this.props.number === 16
            ? "-18%"
            : "-5%"
        }}
        {...this.panResponder.panHandlers}
      />
    );
  }
}

const styles = StyleSheet.create({
  pieces: {
    resizeMode: "contain",
    alignSelf: "center"
  }
});
