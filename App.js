import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { NativeRouter, Route, Redirect, Switch } from "react-router-native";

import Toolbar from "./components/ui/Toolbar";

import Editor from "./components/pages/Editor";
import Analysis from "./components/pages/Analysis";
import Scan from "./components/pages/Scan";
import Clock from "./components/pages/Clock";
import Profile from "./components/pages/Profile";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Redirect exact from="/" to="/editor" />
            <Route exact path="/editor" component={Editor} />
            <Route exact path="/analysis" component={Analysis} />
            <Route exact path="/scan" component={Scan} />
            <Route exact path="/clock" component={Clock} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
          <Toolbar />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
  }
});
