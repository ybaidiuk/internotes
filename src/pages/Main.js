import React, {Component} from 'react';
import {Image, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import Toolbar from "../components/Toolbar";
import colors from "../Colors";
import Button from "../components/Button";
import NoteEditor from "../pages/NoteEditor";

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
        <StatusBar backgroundColor={colors.orange}/>
        <Toolbar>
          <Button onPress={this.toggleDrawer}
                  image={require('../res/ic_menu_white_24dp_1x.png')}/>

          <Text style={s.logo}>Internotes</Text>

          <Button onPress={this.createNote}
                  image={require('../res/ic_add_white_24dp_1x.png')}/>
        </Toolbar>


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
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400'
  }
});