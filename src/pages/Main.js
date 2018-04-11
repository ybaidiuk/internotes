import React, {Component} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import ToolbarForMain from "../components/ToolbarForMain";
import colors from "../Colors";

export default class Main extends Component<Props> {
  static navigationOptions = {
    drawerLabel: 'Main',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../res/ic_home_black_24dp_1x.png')}
        style={{tintColor: tintColor}}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <View style={s.container} >
        <StatusBar backgroundColor={colors.orange}/>
        <ToolbarForMain/>
        <Text>Main</Text>
      </View>
    );
  }


}
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
});