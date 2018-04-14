import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

export default class Button extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight style={s.container} onPress={this.props.onPress}
                          underlayColor="rgba(0,0,0,0.15)"
      >
        <Image source={this.props.image}/>
      </TouchableHighlight>
    );
  }
}
Button.propTypes = {
  onPress: PropTypes.func,
  image: PropTypes.node,
};

const s = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
});