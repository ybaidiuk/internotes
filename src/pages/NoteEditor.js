import React, {Component} from 'react';
import {Text, View, BackHandler, TextInput, StatusBar, StyleSheet, ScrollView} from 'react-native';
import colors from "../Colors";
import Toolbar from "../components/Toolbar";
import Button from "../components/Button";
import {maxNoteLength} from "../Const";


export default class NoteEditor extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
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
    this.props.navigation.navigate('Main');
    return true;
  };

  render() {
    return (
      <View onContentSizeChange={() => {
        console.log("aaa")
      }}>
        <StatusBar backgroundColor={colors.orange}/>
        <Toolbar>
          <Button onPress={this.saveAndGoToMain}
                  image={require('../res/ic_arrow_back_white_24dp_1x.png')}/>
        </Toolbar>

        <ScrollView>
          <TextInput
            value={this.state.text}
            onChangeText={(text) => {this.setState({text});
            console.log(this.state)
            }}
            style={s.container}
            multiline={true}
            autoCorrect={true}
            maxLength={maxNoteLength}
            placeholder={'Please write you note...'}
            numberOfLines={40} // todo continue (text hide of keyboard height)
          />
        </ScrollView>
      </View>
    );
  }
}


const s = StyleSheet.create({
  container: {
    textAlignVertical: 'top',//only android (ios work default)
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: colors.yellow,
    height: '100%',
    padding: 10,
  },
});
//withNavigation(NoteEditor);