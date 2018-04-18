import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from "../Colors";
import {timeStampToFormatedData} from "../utils/DataUtils";

export default class ListItem extends Component<Props> {

  render() {
    return (
      <View style={s.container}>
        <Text style={s.title}>{this.props.title}</Text>
        <Text style={s.text}>{timeStampToFormatedData(this.props.lastUpdate)}</Text>
      </View>
    );
  }


}
const s = StyleSheet.create({
  container: {
    paddingLeft: 15,
  },
  title: {
    color: colors.black,
    fontSize: 30
  }
});