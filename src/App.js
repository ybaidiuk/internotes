/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Greeting from "./components/Greeting";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  ifUserExist = () => {
    // show checkUser (fingerPrint...Or Pass)
    //! show RegisterPage (Ask email , pass)
    return false;
  };
  checkUser = () => {};

  render() {
    return (
      <View style={s.container}>
        <StatusBar
          barStyle={"light-content"}
        />
        {this.ifUserExist()?
          <Text>JA</Text>
          :
          <Greeting/>}
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242176',
  }
});
