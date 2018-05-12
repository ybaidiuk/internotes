import React, {Component} from 'react';
import {
  Image,
  Vibration,
  SectionList,
  StatusBar,
  StyleSheet,
  View,
  Share,
  BackHandler
} from 'react-native';
import Toolbar from '../components/Toolbar';
import colors from '../Colors';
import RoundButton from '../components/RoundButton';
import NoteEditor from '../pages/NoteEditor';
import DbUtils from '../utils/DbUtils';
import {NOTE_IDS_ARR} from '../Const';
import ListItem from '../components/ListItem';
import PopUp from '../components/PopUp';
import SquareButton from '../components/SquareButton';
import NoteDaoUtils from '../utils/NoteDaoUtils';
import Logo from '../components/Logo';
import NetworkUtils from '../utils/NetworkUtils';

export default class Main extends Component<Props> {
  static navigationOptions = {
    drawerLabel: 'Main',
    drawerIcon: ({tintColor}) => (
      <Image source={require('../res/ic_home_black_24dp_1x.png')} style={{tintColor: tintColor}} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {noteArr: [], showPopUp: false, selectedNote: null};
    this.loadNoteList();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', Main.exit);
    console.log('try to init NetworkUtils');
    NetworkUtils.send('send step  NetworkUtils');
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', Main.exit);
  }

  static exit() {
    BackHandler.exitApp();
  }

  async loadNoteList() {
    const noteArr = [];
    let noteIdArr = await DbUtils.readJson(NOTE_IDS_ARR);
    if (noteIdArr == null) return;

    for (let id of noteIdArr) {
      const note = await DbUtils.readJson(id);
      noteArr.push(note);
    }
    await noteArr.sort((a, b) => b.lastUpdate - a.lastUpdate);
    this.setState({noteArr: noteArr});
  }

  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  createNote = () => {
    this.props.navigation.navigate('NoteEditor');
  };

  showPopUp(note) {
    Vibration.vibrate(15);
    this.setState({showPopUp: true, selectedNote: note});
  }

  async deleteNote() {
    await NoteDaoUtils.deleteNote(this.state.selectedNote);
    this.setState({showPopUp: false, selectedNote: null});
    this.loadNoteList();
  }

  share() {
    Share.share({
      message: this.state.selectedNote.text
    }).then(() => this.setState({showPopUp: false}));
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.darkBlue} />

        <PopUp
          onRequestClose={() => this.setState({showPopUp: false})}
          visible={this.state.showPopUp}
        >
          <SquareButton title={'Delete'} onPress={this.deleteNote.bind(this)} />
          <SquareButton title={'Share'} onPress={this.share.bind(this)} />
        </PopUp>

        <Toolbar>
          <RoundButton
            onPress={this.toggleDrawer}
            image={require('../res/ic_menu_white_24dp_1x.png')}
          />

          <Logo title="Internotes" />

          <RoundButton
            onPress={this.createNote}
            image={require('../res/ic_add_white_24dp_1x.png')}
          />
        </Toolbar>

        <SectionList
          indicatorStyle="white"
          renderItem={({item: note, index}) => (
            <ListItem key={index} note={note} onLongPress={this.showPopUp.bind(this)} />
          )}
          ItemSeparatorComponent={() => <View style={s.separator} />}
          sections={[{data: this.state.noteArr}]}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  separator: {
    height: 2,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: colors.darkBlue
  }
});
