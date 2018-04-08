import React, {Component} from 'react';
import {
  Image,
  StatusBar, StyleSheet,
  Text, TouchableHighlight,
  View
} from 'react-native';
import Toolbar from "../components/Toolbar";
import colors from "../Colors";

export default class Main extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <View style={s.container}>
       <StatusBar backgroundColor={'black'}/>
        <Toolbar navigation={this.props.navigation}/>
        <Text>Main</Text>
      </View>
    );
  }



}
const s = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.gray,
  },
});