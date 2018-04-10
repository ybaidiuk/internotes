import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import colors from "../Colors";
import Button from "./Button";
import NoteEditor from "../pages/NoteEditor";
import {withNavigation} from "react-navigation";

class ToolbarForMain extends Component<Props> {
  toggleDrawer = () => {
    this.props.navigation.navigate('DrawerToggle');
  };

  createNote = () => {
    console.log("goToNoteEditor");
    this.props.navigation.navigate('NoteEditor');
  };


  render() {
    return (
      <View style={s.container}>
        <Button onPress={this.toggleDrawer}
                image={require('../res/ic_menu_white_24dp_1x.png')}/>

        <Text style={s.logo}>Internotes</Text>

        <Button onPress={this.createNote}
                image={require('../res/ic_add_white_24dp_1x.png')}/>
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
    paddingTop:
      Platform.select({ // todo fix bug bay land orientation . ios. probably turn off land layaut.
        ios: 22,
        // android: 0
      })
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
    color: 'white',
    fontSize: 20,
    fontWeight: '400'
  }
});

export default withNavigation(ToolbarForMain);