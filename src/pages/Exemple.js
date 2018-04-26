import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from "../components/Button";
import PropTypes from 'prop-types';

export default class Exemple extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      showOptions: false,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Text>Exemple</Text>
      </View>
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
    width: Platform.select({
      ios: 70,
      android: 50
    })
  },
});


// export default withNavigation(Example);