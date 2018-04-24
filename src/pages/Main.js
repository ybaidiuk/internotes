import React, {Component} from 'react';
import {Image, SectionList, StatusBar, StyleSheet, Text, View} from 'react-native';
import Toolbar from "../components/Toolbar";
import colors from "../Colors";
import Button from "../components/Button";
import NoteEditor from "../pages/NoteEditor";
import {insertJson, readJson, remove} from "../utils/DbUtils";
import {NOTE_IDS_ARR} from "../Const";
import ListItem from "../components/ListItem";

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
    this.state = {noteArr: []};
    this.loadNoteList();
  }


  async loadNoteList() {
    const noteArr = [];
    let noteIdArr = await readJson(NOTE_IDS_ARR);
    if (noteIdArr == null) return;

    for (let id of noteIdArr) {
      const note = await readJson(id);
      noteArr.push(note);
    }
    this.setState({noteArr: noteArr})
  }

  toggleDrawer = () => {
    this.props.navigation.navigate('DrawerToggle');
  };

  createNote = () => {
    this.props.navigation.navigate('NoteEditor');
  };


  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.darkBlue}/>
        <Toolbar>
          <Button onPress={this.toggleDrawer}
                  image={require('../res/ic_menu_white_24dp_1x.png')}/>

          <Text style={s.logo}>Internotes</Text>

          <Button onPress={this.createNote}
                  image={require('../res/ic_add_white_24dp_1x.png')}/>
        </Toolbar>

        <SectionList
          renderItem={({item: note, index}) => <ListItem key={index} note={note}/>}
          ItemSeparatorComponent={() => <View style={s.separator}/>}
          sections={[
            {data: this.state.noteArr},
          ]}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }


}
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400'
  },
  separator: {
    height: 2,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: colors.darkBlue
  }
});