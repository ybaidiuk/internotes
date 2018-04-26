import React, {Component} from 'react';
import {
  View,
  BackHandler,
  TextInput,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Modal, Text, TouchableOpacity, TouchableWithoutFeedback, Platform,
} from 'react-native';
import colors from "../Colors";
import Toolbar from "../components/Toolbar";
import Button from "../components/Button";
import {NOTE_MAX_LENGTH} from "../Const";
import {insertNote, updateNote, deleteNote} from "../utils/NoteCrudUtils";


export default class NoteEditor extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      showOptions: false,
    };
  }

  componentDidMount() {
    if (this.props.navigation.state.params)
      this.fillUpField(this.props.navigation.state.params.note);


    BackHandler.addEventListener('hardwareBackPress', this.saveAndGoToMain.bind(this));
  }

  fillUpField(note) {
    console.log(note);
    this.setState({text: note.text});
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.saveAndGoToMain);
  }


  async saveAndGoToMain() {
    console.log("saveAndGoToMain");
    const noteFromProps = this.props.navigation.state.params && this.props.navigation.state.params.note;


    if (noteFromProps && this.state.text.length === 0)//if updatedText empty remove
      await deleteNote(noteFromProps);
    else if (noteFromProps) //if update
      await updateNote(this.state.text, noteFromProps);
    else //if create new
      await insertNote(this.state.text);


    this.props.navigation.navigate('Main');
    return true; // need for back button working correctly
  };

  showOptions(bool) {
    this.setState({showOptions: bool});
  }

//todo
  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.darkBlue}/>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.showOptions}
          onRequestClose={() => {
            this.setState({showOptions: false})
          }}>


          <TouchableWithoutFeedback onPress={() => this.setState({showOptions: false})}>
            <View>
              <View style={s.modalWrapper}>

              </View>
              <Text style={s.modal} onPress={() => console.log("bum")}>
                close Modal
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </Modal>


        <Toolbar>
          <Button onPress={this.saveAndGoToMain.bind(this)}
                  image={require('../res/ic_arrow_back_white_24dp_1x.png')}/>
          <Button onPress={this.showOptions.bind(this, true)}
                  image={require('../res/ic_more_vert_white_24dp_1x.png')}/>
        </Toolbar>
        <ScrollView indicatorStyle='white'>
          <TextInput
            underlineColorAndroid={colors.lightBlue}
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
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
  modalWrapper: {
    opacity: 0.8,
    backgroundColor: colors.black,
    height: '100%',
  },
  modal: {
    position: 'absolute',
    right: 10,
    top: Platform.select({
      ios: 25,
      android: 10
    }),
    backgroundColor: colors.lightBlue,
    width: 100,
    height: 100,
  }
});