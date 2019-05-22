import React from "react";
import { StyleSheet, Dimensions, View, Alert } from "react-native";

import Board from "../board/Board";
import Button from "../ui/Button";
import styles from "../../styles/pages/analysis";
const FEN_DEFAULT = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";


export default class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
      flipBoard: false
    }
  }
  flipBoard() {
    this.setState(prevState => ({
      flipBoard: !prevState.flipBoard
    }));
  }
  resetBoardRequest() {
    Alert.alert(
      "Reset board",
      "Are you sure you want to reset the board?",
      [
        {
          text: "Cancel"
        },
        {
          text: "OK",
          onPress: () => {
            this.setState({ fen: FEN_DEFAULT, flipBoard: false });
          }
        }
      ],
      { cancelable: false }
    );
  }
  render() {
    return (
      <View>
        <Board 
          style={styles.board}
          fen={this.state.fen}
          flip={this.state.flipBoard}
        />
        <View style={styles.actionButtonContainer}>
            <Button
              source={require("../../assets/icons/reverse.png")}
              onPress={() => this.flipBoard()}
            />
            <Button
              onPress={() => this.resetBoardRequest()}
              source={require("../../assets/icons/reset.png")}
            />
            <Button source={require("../../assets/icons/leftarrow.png")} />
            <Button source={require("../../assets/icons/rightarrow.png")} />
          </View>
      </View>
    )
  }
}

const EngineAnalysis = props => {
  return (
    <View>
      
    </View>
  )
}