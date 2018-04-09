import React, {Component} from 'react';
import {Text, View, BackHandler} from 'react-native';
import {withNavigation} from "react-navigation";
import ToolbarForEditor from "../components/ToolbarForEditor";

class NoteEditor extends Component<Props> {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.saveAndGoToMain);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.saveAndGoToMain);
  }

  saveAndGoToMain=()=> {
    console.log("saveAndGoToMain");
    //saveFunc
    this.props.navigation.navigate('Main');
    return true;
  };

  render() {
    return (
      <View>
        <ToolbarForEditor onPressBack={this.saveAndGoToMain}/>
        {/*<Text>NoteEditor</Text>*/}
      </View>
    );
  }


}
export default withNavigation(NoteEditor);