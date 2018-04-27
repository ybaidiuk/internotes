import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import colors from "../Colors";
import DataUtils from "../utils/DataUtils";
import withNavigation from "react-navigation/src/views/withNavigation";

class ListItem extends Component<Props> {
  state = {};

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
  //todo make underlayColor null or transparent after longPressTrigert
  // and make it again blue after onShowUnderlay
  render() {
    return (
      <TouchableHighlight
        onPress={this.goToNoteEditor.bind(this)}
        onLongPress={this.props.onLongPress.bind(this, this.props.note)}
        underlayColor={colors.lightBlue}>
        <View style={s.container}>
          <Text style={s.title} numberOfLines={1}>{ListItem.makeTitle(this.props.note.text)}</Text>
          <Text style={s.lastUpdate}>{DataUtils.timeStampToFormatedData(this.props.note.lastUpdate)}</Text>
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
    color: colors.lightBlue,
    fontSize: 12
  }
});


export default withNavigation(ListItem);