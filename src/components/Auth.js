import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';

/**
 * todo later here should be fingerPrint or Password or FaceId Authentication
 */
export default class Auth extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <View>
        <Text>Auth</Text>
      </View>
    );
  }


}