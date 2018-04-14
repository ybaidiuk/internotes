import React, {Component} from 'react';
import {
  Text, View, BackHandler, TextInput, StatusBar, StyleSheet, ScrollView,
  KeyboardAvoidingView, Keyboard, Animated
} from 'react-native';
import colors from "../Colors";
import Toolbar from "../components/Toolbar";
import Button from "../components/Button";
import {maxNoteLength} from "../Const";


export default class NoteEditor extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      keyboardHide: 0,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.saveAndGoToMain);


    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.saveAndGoToMain);
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = (e) => {
    console.log("Keyboard Shown");
    console.log(e.endCoordinates.height);
    // this.setState({keyboardHide: e.endCoordinates.height})
  };

  _keyboardDidHide = () => {
    console.log('Keyboard Hidden');
  };


  saveAndGoToMain = () => {
    console.log("saveAndGoToMain");
    //saveFunc
    this.props.navigation.navigate('Main');
    return true;
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

    //todo minHeight: '100%', screen View
  }
});