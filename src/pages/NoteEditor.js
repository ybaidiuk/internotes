import React, {Component} from 'react';
import {View, BackHandler, TextInput, StatusBar, StyleSheet, ScrollView,} from 'react-native';
import colors from "../Colors";
import Toolbar from "../components/Toolbar";
import Button from "../components/Button";
import {maxNoteLength} from "../Const";
import {insertNote} from "../utils/NoteCrudUtils";
import {withNavigation} from "react-navigation";


export default class NoteEditor extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.saveAndGoToMain.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.saveAndGoToMain);
  }


  async saveAndGoToMain() {
    console.log("saveAndGoToMain");

    //saveFunc
    if (this.props.navigation.state.params && this.props.navigation.state.params.noteId)
      console.log("Update"); //todo
    else {
      await insertNote(this.state.text);
    }


    this.props.navigation.navigate('Main');
    return true; // need for back button working correctly
  };

  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.orange}/>
        <Toolbar>
          <Button onPress={this.saveAndGoToMain.bind(this)}
                  image={require('../res/ic_arrow_back_white_24dp_1x.png')}/>
        </Toolbar>
        <ScrollView>
          <TextInput
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
            style={s.text}
            multiline={true}
            autoCorrect={true}
            maxLength={maxNoteLength}
            placeholder={'Please write you note...'}
          />
        </ScrollView>
      </View>
    );
  }
}


const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray
  },
  text: {
    textAlignVertical: 'top',//only android (ios work default)
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15,
    flex: 1
  }
});