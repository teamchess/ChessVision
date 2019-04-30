import React from "react";
import { View, Dimensions, StyleSheet, PanResponder } from "react-native";
import Square from "./Square";
import { DraggablePiece } from "./Piece";
import { parseFEN } from "../../Utils";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPiece: {
        x: null,
        y: null
      }
    };

		this.panResponder;
    this.setSelected = this.setSelected.bind(this);
  }

  componentWillMount() {
		console.log("HELLO!")
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
			onStartShouldSetPanResponderCapture: (event, gestureState) => true,
			onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
				// responder. This typically means a gesture has succeeded
				
				this.setSelected({ x: null, y: null }, null)
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

  setSelected({ x, y }, number) {
    this.setState({
      selectedPiece: {
        x: x,
				y: y,
				number: number
      }
    });
  }

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
				{...this.panResponder.panHandlers}
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
                setSelected={this.setSelected}
                selectedCoords={this.state.selectedPiece}
              />
            ))}
          </View>
				))}
				<View style={{ display: this.state.selectedPiece.x ? "flex" : "none",  }}/>
				<DraggablePiece x={this.state.locationX} y={this.state.locationY} number={this.state.selectedPiece.number} />
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
