import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import RoundButton from '../components/RoundButton';
import PropTypes from 'prop-types';

export default class Exemple extends Component<Props> {
  render() {
    return <Text style={s.logo}>{this.props.title}</Text>;
  }
}

RoundButton.propTypes = {
  title: PropTypes.string
};

const s = StyleSheet.create({
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  }
});

// export default withNavigation(Example);
