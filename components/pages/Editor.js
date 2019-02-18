import React from "react";
import { Clipboard, TouchableOpacity, TouchableWithoutFeedback, View, Text, Image } from "react-native";

import Board from "../board/Board";

import styles from "../../styles/pages/editor";
import { PIECES as PIECES_IMAGES } from "../board/Piece";

const FEN_DEFAULT = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      certainty: null,
      fen: FEN_DEFAULT,
      buttonPressed: false,
      piecePickerColor: "white"
    };
  }

  render() {
    return (
      <View styles={styles.container}>
        <Board style={styles.board} fen={this.state.fen} />
        <FenDisplay fen={this.state.fen} />
        <PieceSelector piecePickerColor={this.state.piecePickerColor} />
      </View>
    );
  }
}

const FenDisplay = props => {
  return (
    <View style={styles.fenDisplay}>
      <Text style={styles.fenText} numberOfLines={1} ellipsizeMode="tail">
        {props.fen}
      </Text>
      <View style={styles.iconWrapper}>
        <TouchableOpacity onPress={() => Clipboard.setString(props.fen)}>
          <Image style={styles.copyIcon} source={require("../../assets/icons/copy.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PieceSelector = props => {
  return (
    <View style={styles.pieceSelector}>
      <View style={styles.colorSelector}>
        <View style={styles.colorSelectorGraphic}>
          <TouchableWithoutFeedback>
            <View style={styles.colorSelectorWhite} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.colorSelectorBlack} />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.piecePicker}>
        {["pawn", "bishop", "knight", "rook", "queen", "king"].map(p => (
          <PieceSelectorPiece color={props.piecePickerColor} source={PIECES_IMAGES[p]} key={p} />
        ))}
      </View>
    </View>
  );
};

const PieceSelectorPiece = props => {
  return <Image style={{ ...styles.piecePickerPiece, tintColor: props.color }} source={props.source} />;
};
