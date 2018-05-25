import React, {Component} from 'react';
import {Image, StyleSheet, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../Colors';

export default class RoundButton extends Component<Props> {
  // static propTypes = {
  // }; //todo test if we can use this syntax

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        style={s.container}
        onPress={this.props.disable ? null : this.props.onPress}
        underlayColor="rgba(0,0,0,0.2)"
      >
        <Image tintColor={this.props.disable && colors.black} source={this.props.image} />
      </TouchableHighlight>
    );
  }
}
RoundButton.propTypes = {
  onPress: PropTypes.func,
  image: PropTypes.node,
  // test: PropTypes.number, todo
  disable: PropTypes.bool
};

const s = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 45,
    borderRadius: 50
  }
});
