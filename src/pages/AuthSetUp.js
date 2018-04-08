import React, {Component} from 'react';
import {
  StatusBar,
  Text,
  View
} from 'react-native';

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
        <StatusBar barStyle={"light-content"}/>
        <Text>AuthSetUp</Text>
      </View>
    );
  }


}