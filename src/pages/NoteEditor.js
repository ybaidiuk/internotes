import React, {Component} from 'react';
import {Text, View, BackHandler, TextInput, StatusBar, StyleSheet} from 'react-native';
import {withNavigation} from "react-navigation";
import ToolbarForEditor from "../components/ToolbarForEditor";
import colors from "../Colors";

class NoteEditor extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      test: 'start text'
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
    return (// todo continue
      <View>
        <StatusBar backgroundColor={colors.orange}/>
        <ToolbarForEditor onPressBack={this.saveAndGoToMain}/>
        {/*<TextInput*/}
          {/*multiline*/}
          {/*style={s.container}*/}
          {/*onChangeText={(text) => this.setState({text})}*/}
          {/*value={this.state.text}*/}
        {/*/>*/}
      </View>
    );
  }
}


const s = StyleSheet.create({
  container: {

    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: colors.yellow,
    // height: 55,
    // padding: 7,
  },
});

export default withNavigation(NoteEditor);