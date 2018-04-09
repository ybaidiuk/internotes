import React, {Component} from 'react';
import {
  Image, StyleSheet,
  Text, TouchableHighlight,
  View
} from 'react-native';
import colors from "../Colors";
import Button from "./Button";

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
        <Button onPress={this.toggleDrawer}
                image={require('../res/ic_menu_black_48dp_1x.png')}/>

        <Text style={s.logo}>Internotes</Text>

        <Button onPress={this.createNote}
                image={require('../res/ic_add_black_48dp_1x.png')}/>
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
    padding: 7,
  },
  btn: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 30,
    width: 30,
  },
  logo: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});