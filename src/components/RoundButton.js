import React, {Component} from 'react';
import {Image, StyleSheet, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

export default class RoundButton extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        style={s.container}
        onPress={this.props.onPress}
        underlayColor="rgba(0,0,0,0.2)"
      >
        <Image source={this.props.image} />
      </TouchableHighlight>
    );
  }
}
RoundButton.propTypes = {
  onPress: PropTypes.func,
  image: PropTypes.node
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
