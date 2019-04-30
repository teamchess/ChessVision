import React from "react";
import { View, TouchableHighlight, StyleSheet, PanResponder } from "react-native";
import Piece from "./Piece";

/**
 * Will take in coords and piece.
 */
export default class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locationX: null,
      locationY: null,
      selected: false
    }

    this.panResponder;
  }

  componentWillMount() {
		console.log("HELLO!")
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
			onStartShouldSetPanResponderCapture: (event, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderStart: (evt, gestureState) => {
        this.setState({ selected: true })
      },
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
				// responder. This typically means a gesture has succeeded
				
				// this.setSelected({ x: null, y: null }, nxull)
				console.log(this.state.selectedPiece)
      },

      onPanResponderMove: (event, gestureState) => {
				console.log("X: ", this.state.locationX, "Y: ", this.state.locationY)
        this.setState({
          locationX: parseFloat(event.nativeEvent.locationX.toFixed(2)),
          locationY: parseFloat(event.nativeEvent.locationY.toFixed(2))
        });
			}
			

    });
  }

  isDarkSquare() {
    const { x, y } = this.props.coords;
    return (y % 2 == 0 && x % 2 !== 0) || (y % 2 !== 0 && x % 2 === 0);
	}
	
	isSelected() {
		const { x: sX, y: sY } = this.props.selectedCoords;
		const { x, y} = this.props.coords;

		return x === sX && y === sY
	}

  // this.props.setSelected(this.props.coords)
  render() {
    return (
      <View
        style={{ ...styles.square,
					backgroundColor: this.isDarkSquare() ? "#1B595C" : "#8E8E93" }}
        onPressIn={() => {
        }}
        {...this.panResponder.panHandlers}
      >
          <Piece number={this.props.piece} isVisible={!this.isSelected()} x={this.state.locationX} y={this.state.locationY} />
      </View>
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
