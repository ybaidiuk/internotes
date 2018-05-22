import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';
import colors from '../Colors';

/**
 * todo later here should be fingerPrint or Password or FaceId Authentication SetUp
 */
export default class AuthSetUp extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor={colors.darkBlue} />
        <Text>AuthSetUp</Text>
      </View>
    );
  }
}
