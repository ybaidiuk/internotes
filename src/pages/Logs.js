import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import LogsUtils, {LOG_TYPE} from "../utils/LogsUtils";
import Toolbar from "../components/Toolbar";
import Logo from "../components/Logo";
import RoundButton from "../components/RoundButton";

export default class Logs extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      logsArr: [],
    };
  }

  async componentDidMount() {
    const logsArr = await LogsUtils.getLogs();
    this.setState({logsArr: logsArr});
  }

  static createItem({item}) {
    return <View>

      <View style={{flexDirection: 'row'}}>
        {Logs.getLogTypeColor(item.logType)}
        <Text> {item.date}</Text>
      </View>
      <Text> {item.massage}</Text>
    </View>
  }

  static getLogTypeColor(logType) {


    switch (logType) {
      case LOG_TYPE.INFO :
        return <Text style={[s.type, {color: 'green'}]}>{'INFO: '}</Text>;
      case LOG_TYPE.WARNING :
        return <Text style={[s.type, {color: 'yellow'}]}>{'WARNING: '}</Text>;
      case LOG_TYPE.ERROR :
        return <Text style={[s.type, {color: 'red'}]}>{'ERROR: '}</Text>;
      default:
        return <Text style={[s.type, {color: 'gray'}]}>{'UNKNOWN: '}</Text>
    }
  }

  render() {

    return (
      <View style={{flex: 1}}>
        <Toolbar>
          <RoundButton
            onPress={this.props.navigation.toggleDrawer}
            image={require('../res/ic_menu_white_24dp_1x.png')}
          />
          <Logo title="Logs: "/>
          <View style={{width: 45}}/>
        </Toolbar>
        <SectionList
          renderItem={Logs.createItem}
          ItemSeparatorComponent={() => <View style={{height: 2, backgroundColor: 'black'}}/>}
          sections={[{data: this.state.logsArr}]}
          keyExtractor={(item, index) => item + index}
        />

      </View>
    );
  }
}

const s = StyleSheet.create({
  type: {
    fontWeight: 'bold'
  }
});
