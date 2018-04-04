import React, {Component} from 'react';
import {
  View
} from 'react-native';
import Navigator from "./Navigator";

/**
 * todo later here should be fingerPrint or Password or FaceId Authentication SetUp
 */
export default class AuthSetUp extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Navigator/>
      </View>
    );
  }


}