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
  Text,
  View
} from 'react-native';
import Greeting from "./components/Greeting";
import {readJson} from "./utils/FileUtils";
import {authData} from "./utils/Const";
import colors from "./utils/Colors";

type Props = {};
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
    switch (this.state.authData){
      case undefined:
        return <ActivityIndicator size={50} color={colors.lightBlue}/>; // animaiton
      case null:
        return <Greeting/>;
      default:
        return null;

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
    backgroundColor: colors.blue,
  }
});
