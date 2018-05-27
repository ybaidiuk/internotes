import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LogsUtils from "../utils/LogsUtils";

export default class Logs extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      logsArr: [],
    };
  }

  async componentDidMount() {
    this.setState({logsArr: await LogsUtils.getLogs()});

  }

  getLogs() {
    return this.state.logsArr.map((log, index) => <Text key={index}>{log}</Text>)
  }

  render() {
    return (
      <View>
        <Text>Logs</Text>
        {this.getLogs()}
      </View>
    );
  }
}