import React, {Component} from 'react';
import {View, BackHandler, TextInput, StatusBar, StyleSheet, ScrollView,} from 'react-native';
import colors from "../Colors";
import Toolbar from "../components/Toolbar";
import Button from "../components/Button";
import {maxNoteLength} from "../Const";
import {saveNewNote} from "../utils/UserDataUtils";


export default class NoteEditor extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.saveAndGoToMain);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.saveAndGoToMain);
  }


  saveAndGoToMain = () => {
    console.log("saveAndGoToMain");
    //saveFunc
    // saveNewNote(this.state.text); todo
    this.props.navigation.navigate('Main');
    return true; // need for back button working correctly
  };

  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.orange}/>
        <Toolbar>
          <Button onPress={this.saveAndGoToMain}
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