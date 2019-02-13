import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Board from "./Board";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Board />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#272727"
    }
})