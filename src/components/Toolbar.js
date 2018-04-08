import React, {Component} from 'react';
import {
  Image, StyleSheet,
  Text,
  View
} from 'react-native';
import colors from "../Colors";

export default class Toolbar extends Component<Props> {

  render() {
    return (
      <View style={s.container}>
        <Image source={require('../res/ic_menu_48pt.png')} />
        <Text>Toolbar</Text>
      </View>
    );
  }


}

const s = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    height: '7%'
  }
});