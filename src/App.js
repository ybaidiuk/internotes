/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import Login from "./components/Login";
import {readJson} from "./utils/FileUtils";
import {authData} from "./utils/Const";
import colors from "./utils/Colors";
import Auth from "./components/Auth";
import {Platform} from "react-native";

type Props = {};
const buzyIndicatorSize = Platform.select({
  ios: 'large',
  android: 50
});
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {authData: undefined};
  }

  componentDidMount() {
    this.loadUserData();
  }


  async loadUserData() {
    const data = await readJson(authData);
    this.setState({authData: data})
  }

  getContent = () => {
    switch (this.state.authData) {
      case undefined: // animaiton
        return <ActivityIndicator size={buzyIndicatorSize} color={colors.lightBlue}/>;

      case null:
        return <Login/>;
      default:
        return <Auth/>;

    }
  };

  render() {
    return (
      <View style={s.container}>
        <StatusBar
          barStyle={"light-content"}
        />
        {this.getContent()}
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.barkBlue,
  }
});
