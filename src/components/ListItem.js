import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import colors from "../Colors";
import {timeStampToFormatedData} from "../utils/DataUtils";
import withNavigation from "react-navigation/src/views/withNavigation";

class ListItem extends Component<Props> {
  state = {
    modalVisible: false,
  };

  goToNoteEditor() {
    console.log("go to note editor to edit note")
    this.props.navigation.navigate('NoteEditor', {note: this.props.note});
  }


  static makeTitle(text) {
    text = text.trim();
    const indexOfNewLine = text.indexOf('\n');
    if (indexOfNewLine > 0)
      text = text.substr(0, indexOfNewLine);
    return text;
  }

  onLongPress() {
    //todo modal or just 3dot buttons
    // console.log('onLongPress')
    // this.setState({modalVisible: true});
  }


  render() {
    return (
      <TouchableHighlight
        onPress={this.goToNoteEditor.bind(this)}
        onLongPress={this.onLongPress.bind(this)}
        underlayColor={colors.lightBlue}>
        <View style={s.container}>
          {/*<Modal*/}
            {/*animationType="slide"*/}
            {/*presentationStyle='overFullScreen'*/}
            {/*transparent={false}*/}
            {/*visible={this.state.modalVisible}*/}
            {/*onRequestClose={() => {*/}
              {/*alert('Modal has been closed.');*/}
            {/*}}/>*/}
          <Text style={s.title} numberOfLines={1}>{ListItem.makeTitle(this.props.note.text)}</Text>
          <Text style={s.lastUpdate}>{timeStampToFormatedData(this.props.note.lastUpdate)}</Text>
        </View>
      </TouchableHighlight>

    );
  }

}

const s = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    color: colors.white,
    fontSize: 30
  },
  lastUpdate: {
    color: colors.white,
  }
});


export default withNavigation(ListItem);