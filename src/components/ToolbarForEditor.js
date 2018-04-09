import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from "../Colors";
import Button from "./Button";

export default class ToolbarForEditor extends Component<Props> {



  render() {
    return (
      <View style={s.container}>
        <Button onPress={this.props.onPressBack}
                image={require('../res/ic_arrow_back_white_24dp_1x.png')}/>
      </View>
    );
  }


}

const s = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.yellow,
    height: 55,
    padding: 7,
  },
  btn: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 30,
    width: 30,
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400'
  }
});