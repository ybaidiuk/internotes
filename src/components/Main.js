import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';

/**
 * todo later here should be fingerPrint or Password or FaceId Authentication
 */
export default class Main extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Main</Text>
      </View>
    );
  }


}