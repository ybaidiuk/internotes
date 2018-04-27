import React, {Component} from 'react';
import {Image, Platform, SectionList, StatusBar, StyleSheet, Text, View} from 'react-native';
import Toolbar from "../components/Toolbar";
import colors from "../Colors";
import RoundButton from "../components/RoundButton";
import NoteEditor from "../pages/NoteEditor";
import {readJson} from "../utils/DbUtils";
import {NOTE_IDS_ARR} from "../Const";
import ListItem from "../components/ListItem";
import PopUp from "../components/PopUp";
import SquareButton from "../components/SquareButton";
import NoteDaoUtils from "../utils/NoteDaoUtils";

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
    this.state = {noteArr: [], showPopUp: false, selectedNote: null};
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
    await noteArr.sort((a, b) => b.lastUpdate - a.lastUpdate);
    this.setState({noteArr: noteArr})
  }

  toggleDrawer = () => {
    this.props.navigation.navigate('DrawerToggle');
  };

  createNote = () => {
    this.props.navigation.navigate('NoteEditor');
  };

  showPopUp(note) {
    //todo add vibration
    this.setState({showPopUp: true, selectedNote: note})
  }

  async deleteNote() {
    await NoteDaoUtils.deleteNote(this.state.selectedNote);
    this.setState({showPopUp: false, selectedNote: null});
    this.loadNoteList();
  }


  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.darkBlue}/>

        <PopUp onRequestClose={() => this.setState({showPopUp: false})}
               visible={this.state.showPopUp}
               style={s.modal}>
          <SquareButton title={'Delete'} onPress={this.deleteNote.bind(this)}/>
        </PopUp>

        <Toolbar>
          <RoundButton onPress={this.toggleDrawer}
                       image={require('../res/ic_menu_white_24dp_1x.png')}/>

          <Text style={s.logo}>Internotes</Text>

          <RoundButton onPress={this.createNote}
                       image={require('../res/ic_add_white_24dp_1x.png')}/>
        </Toolbar>

        <SectionList
          indicatorStyle='white'
          renderItem={({item: note, index}) => <ListItem key={index} note={note}
                                                         onLongPress={this.showPopUp.bind(this)}/>}
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
  },
  modal: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});