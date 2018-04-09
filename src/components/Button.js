import React, {Component} from 'react';
import {
  Image, StyleSheet,
  Text, TouchableHighlight,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import colors from "../Colors";

export default class Button extends Component<Props> {

  constructor(props) {
    super(props);
    console.log("AA")
    console.log(this.props.image)
  }

  render() {
    return (
      <TouchableHighlight style={s.container} onPress={this.props.onPress}
                          underlayColor="rgba(253,138,94,0.2)" // tmp solution because activeOpacity not working
                       // activeOpacity={0.50} todo not working (buggy)
      >
        <Image style={s.img}
               source={this.props.image}/>
      </TouchableHighlight>
    );
  }
}
Button.propTypes = {
  onPress: PropTypes.func,
  image: PropTypes.number, //todo why returned number ?
};

const s = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  img: {
    height: 30,
    width: 30,
  },
});