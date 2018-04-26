import React, {Component} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import PropTypes from 'prop-types';
import colors from "../Colors";

export default class SquareButton extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={s.container}>
          <Text style={s.text}>{this.props.title}</Text>
        </View>

      </TouchableNativeFeedback>
    );
  }
}
SquareButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};

const s = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: colors.darkBlue
  },
  text:{
    fontSize: 15,
    color: colors.white,
  }
});