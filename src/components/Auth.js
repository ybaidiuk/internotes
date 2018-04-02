import React, {Component} from 'react';
import {
  View
} from 'react-native';
import Main from "./Main";

/**
 * todo later here should be fingerPrint or Password or FaceId Authentication
 */
export default class Auth extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Main/>
      </View>
    );
  }


}