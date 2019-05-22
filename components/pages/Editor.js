import React from "react";
import {
  Clipboard,
  TouchableOpacity,
  Alert,
  Dimensions,
  View,
  Text,
  Image
} from "react-native";
import Switch from "react-native-switch-pro";
import Button from "../ui/Button";
import Board from "../board/Board";

import styles from "../../styles/pages/editor";
import { PIECES as PIECES_IMAGES } from "../board/Piece";

const WIDTH = Dimensions.get("window").width,
  HEIGHT = Dimensions.get("window").height;
const FEN_DEFAULT = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
      flipBoard: false,
      piecePickerColor: "white",
      switchVal: "white"
    };

    this.setPickerColor = this.setPickerColor.bind(this);
    this.flipBoard = this.flipBoard.bind(this);
    this.resetBoardRequest = this.resetBoardRequest.bind(this);
  }

  setPickerColor(color) {
    this.setState({
      piecePickerColor: color,
      switchVal: color
    });
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
  resetBoard() {
    this.setState({ fen: FEN_DEFAULT });
  }
  render() {
    return (
      <View style={styles.container}>
        <Board
          style={styles.board}
          fen={this.state.fen}
          flip={this.state.flipBoard}
        />
        <View style={styles.actions}>
          <View style={styles.actionButtonContainer}>
            <Button
              source={require("../../assets/icons/reverse.png")}
              onPress={this.flipBoard}
            />
            <Button
              onPress={this.resetBoardRequest}
              source={require("../../assets/icons/reset.png")}
            />
            <Button source={require("../../assets/icons/save.png")} />
            <Button source={require("../../assets/icons/upload.png")} />
          </View>
          <PieceSelector
            piecePickerColor={this.state.piecePickerColor}
            setPickerColor={this.setPickerColor}
            switchVal={this.state.switchVal}
          />

          <FenDisplay fen={this.state.fen} />
        </View>
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
          <Image
            style={styles.copyIcon}
            source={require("../../assets/icons/copy.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PieceSelector = props => {
  return (
    <View style={styles.pieceSelector}>
      <View style={styles.colorSelector}>
        {/* <View style={styles.colorSelectorGraphic}>
					<TouchableOpacity
						onPress={() => props.setPickerColor("white")}
					>
						<View style={styles.colorSelectorWhite} />
					</TouchableOpacity>
					<TouchableWithoutFeedback
						onPress={() => props.setPickerColor("black")}
					>
						<View style={styles.colorSelectorBlack} />
					</TouchableWithoutFeedback>
				</View>  */}
        <Switch
          height={HEIGHT / 28}
          width={HEIGHT / 14}
          circleColorActive="black"
          backgroundActive="gray"
          circleColorInactive="white"
          backgroundInactive="#c6c6c6"
          onSyncPress={() => {
            if (props.switchVal == "white") {
              props.setPickerColor("black");
            } else {
              props.setPickerColor("white");
            }
          }}
        />
      </View>

      <View style={styles.piecePicker}>
        {["pawn", "bishop", "knight", "rook", "queen", "king"].map(p => (
          <PieceSelectorPiece
            color={props.piecePickerColor}
            source={PIECES_IMAGES[p]}
            key={p}
          />
        ))}
      </View>
    </View>
  );
};

const PieceSelectorPiece = props => {
  return (
    <Image
      style={{ ...styles.piecePickerPiece, tintColor: props.color }}
      source={props.source}
    />
  );
};
