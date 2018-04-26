import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import colors from "../Colors";
import {isPortrait} from "../utils/ScreenUtils";

export default class Toolbar extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isPortrait: true,
    }
  }

  onLayout = () => {
    this.setState({isPortrait: isPortrait()});
  };

  getPaddingTop = () => {
    return Platform.OS === 'ios' && this.state.isPortrait ? 25 : 0;
  };

  render() {
    return (
      <View style={[s.container, {paddingTop: this.getPaddingTop()}]} onLayout={this.onLayout}>
        {this.props.children}

      </View>
    );
  }


}

const s = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue,
    height: 50,
    padding: 7,
  }
});