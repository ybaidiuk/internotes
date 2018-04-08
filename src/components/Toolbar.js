import React, {Component} from 'react';
import {
  Image, StyleSheet,
  Text, TouchableHighlight,
  View
} from 'react-native';
import colors from "../Colors";

export default class Toolbar extends Component<Props> {
  toggleDrawer = () => {
    this.props.navigation.navigate('DrawerToggle');
  };

  createNote = () => {
    console.log("createNote");
  };


  render() {
    return (
      <View style={s.container}>
        <TouchableHighlight onPress={this.toggleDrawer}>
          <Image
            style={s.menuBtn}
            source={require('../res/ic_menu_black_48dp_1x.png')}
          />
        </TouchableHighlight>
        <Text>Internotes</Text>
        <TouchableHighlight onPress={this.createNote}>
          <Image
            style={s.menuBtn}
            source={require('../res/ic_add_black_48dp_1x.png')}
          />
        </TouchableHighlight>
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
    backgroundColor: colors.yellow,
    height: 55,
    padding: 15,
  },
  menuBtn: {
    height: 30,
    width: 30,
  }
});