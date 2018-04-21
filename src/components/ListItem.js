import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import colors from "../Colors";
import {timeStampToFormatedData} from "../utils/DataUtils";
import withNavigation from "react-navigation/src/views/withNavigation";

class ListItem extends Component<Props> {
  goToNoteEditor() {
    console.log("go to note editor to edit note")
    this.props.navigation.navigate('NoteEditor', {note: this.props.note});
  }

  render() {
    return (
      <TouchableHighlight onPress={this.goToNoteEditor.bind(this)} underlayColor={colors.gray}>
        <View style={s.container}>
          <Text style={s.title}>{this.props.note.title}</Text>
          <Text style={s.text}>{timeStampToFormatedData(this.props.note.lastUpdate)}</Text>
        </View>
      </TouchableHighlight>

    );
  }


}
const s = StyleSheet.create({
  container: {
    paddingLeft: 15,
  },
  title: {
    color: colors.black,
    fontSize: 30
  }
});


export default withNavigation(ListItem);