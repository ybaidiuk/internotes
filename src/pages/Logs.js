import React, {Component} from 'react';
import {SectionList, Text, View} from 'react-native';
import LogsUtils from "../utils/LogsUtils";
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
    this.setState({logsArr: await LogsUtils.getLogs()});
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
          renderItem={({item}) => <Text>{item}</Text>}
          ItemSeparatorComponent={() => <View style={{height: 2, backgroundColor: 'black'}}/>}
          sections={[{data: this.state.logsArr}]}
          keyExtractor={(item, index) => item + index}
        />

      </View>
    );
  }
}