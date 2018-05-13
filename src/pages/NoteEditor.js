import React, {Component} from 'react';
import {
  View,
  Share,
  BackHandler,
  TextInput,
  StatusBar,
  StyleSheet,
  ScrollView,
  Platform,
  TabBarIOS
} from 'react-native';
import colors from "../Colors";
import Toolbar from "../components/Toolbar";
import RoundButton from "../components/RoundButton";
import {NOTE_MAX_LENGTH} from "../Const";
import SquareButton from "../components/SquareButton";
import NoteDaoUtils from "../utils/NoteDaoUtils";
import PopUp from "../components/PopUp";
import Logo from "../components/Logo";
import History from "../entities/History";

export default class NoteEditor extends Component<Props> {

  //region LIFE CYCLE
  constructor(props) {
    super(props);

    this._history = new History();
    this.state = {
      text: '',
      showOptions: false,
    };
  }

  componentDidMount() {
    if (this.props.navigation.state.params)
      this.fillUpField(this.props.navigation.state.params.note);


    BackHandler.addEventListener('hardwareBackPress', this.saveOrDeleteAndGoToMain.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.saveOrDeleteAndGoToMain);
  }
  //endregion



  //region EVENT HANDLERS
  fillUpField(note) {
    console.log(note);
    this.setState({text: note.text});
  }



  async saveOrDeleteAndGoToMain() {
    console.log("saveOrDeleteAndGoToMain");
    const noteFromProps = this.props.navigation.state.params && this.props.navigation.state.params.note;


    if (noteFromProps && this.state.text.length === 0)//if updatedText empty remove
      await NoteDaoUtils.deleteNote(noteFromProps);
    else if (noteFromProps) //if update
      await NoteDaoUtils.updateNote(this.state.text, noteFromProps);
    else //if create new
      await NoteDaoUtils.insertNote(this.state.text);


    this.props.navigation.navigate('Main');
    return true; // need for back button working correctly
  };

  showOptions(bool) {
    console.log("showOptions", bool);
    this.setState({showOptions: bool});
  }

  deleteNote() { // if state.text is empty note will be removed;
    this.setState({showOptions: false, text: ''}, this.saveOrDeleteAndGoToMain.bind(this));
  }

  share() {
    Share.share({
      message: this.state.text,
    }).then(()=>this.setState({showOptions: false}))

  }

  handleTextChange(text) {
    this.setState({
      text:text
    });

    this._history.pushToStack(text);
    console.log(this._history.arr);
  }

  handleUndoEvent() {
    const text = this._history.undo();
    this.setState({
      text:text
    });
  }

  handleRedoEvent() {
    const text = this._history.redo();
    if (text==null) return;

    this.setState({
      text:text
    });
  }
  //endregion


  //region RENDERING
  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.darkBlue}/>
        <PopUp onRequestClose={this.showOptions.bind(this, false)}
               visible={this.state.showOptions}
               rightTopCorner>
          <SquareButton title={'Delete'} onPress={this.deleteNote.bind(this)}/>
          <SquareButton title={'Share'} onPress={this.share.bind(this)}/>
        </PopUp>


        <Toolbar>
          <RoundButton onPress={this.saveOrDeleteAndGoToMain.bind(this)}
                       image={require('../res/ic_arrow_back_white_24dp_1x.png')}/>

          <Logo title='NoteEditor'/>


          <RoundButton  onPress = {this.handleUndoEvent.bind(this)}
                        image={require('../res/ic_undo_white_24dp_1x.png')}/>

          <RoundButton  onPress = {this.handleRedoEvent.bind(this)}
                        image={require('../res/ic_redo_white_24dp_1x.png')}/>


          <RoundButton onPress={this.showOptions.bind(this, true)}
                       image={require('../res/ic_more_vert_white_24dp_1x.png')}/>
        </Toolbar>
        <ScrollView indicatorStyle='white'>
          <TextInput
            underlineColorAndroid={colors.lightBlue}
            value={this.state.text}
            onChangeText={this.handleTextChange.bind(this)}
            style={s.text}
            multiline={true}
            autoCorrect={true}
            maxLength={NOTE_MAX_LENGTH}
            placeholder={'Please write you note...'}
            placeholderTextColor={colors.lightBlue}
          />
        </ScrollView>
      </View>
    );
  }
}
//endregion


const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  text: {
    textAlignVertical: 'top',//only android (ios work default)
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
    color: colors.white
  },
});
