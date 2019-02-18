import { StyleSheet, Dimensions } from "react-native";

import uiStyles from "../ui";

const dimensions = { width: Dimensions.get("window").width, height: Dimensions.get("window").height },
  uiWidth = dimensions.width * 0.95;

export default StyleSheet.create({
  board: {
    marginTop: dimensions.height * 0.13,
    alignSelf: "center"
  },

  fenDisplay: {
    width: uiWidth,
    marginTop: dimensions.height * 0.03,
    height: 40,
    backgroundColor: "#373737",
    alignSelf: "center",
    flexDirection: "row",
    ...uiStyles.borderRadius,
    ...uiStyles.shadow
  },
  fenText: {
    flex: 0.87,
    color: "#8E8E93",
    fontSize: 15,
    paddingRight: 10,
    paddingLeft: 10,
    lineHeight: 40
  },
  iconWrapper: {
    flex: 0.13,
    ...uiStyles.centerContent,
    paddingRight: 3,
    borderLeftWidth: 0.75,
    borderLeftColor: "#272727"
  },
  copyIcon: {
    height: 23,
    resizeMode: "contain",
    tintColor: "#8E8E93"
  },

  pieceSelector: {
    width: uiWidth,
    height: 69,
    marginTop: dimensions.width * 0.04,
    backgroundColor: "#373737",
    flexDirection: "row",
    alignSelf: "center",
    ...uiStyles.borderRadius,
    ...uiStyles.shadow
  },
  colorSelector: {
    flex: 0.3,
    ...uiStyles.centerContent,
    borderRightWidth: 0.75,
    borderRightColor: "#272727"
  },
  colorSelectorGraphic: {
    width: "75%",
    height: "45%",
    flexDirection: "row",
  },
  colorSelectorBlack: {
    backgroundColor: "black",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flex: 0.5
  },
  colorSelectorWhite: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flex: 0.5
  },

  piecePicker: {
    flexDirection: "row",
    flex: 0.7,
    ...uiStyles.centerContent
  },
  piecePickerPiece: {
    flex: 1,
    height: "45%",
    resizeMode: "contain"
  }
});
