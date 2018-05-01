import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import RoundButton from "../components/RoundButton";
import PropTypes from 'prop-types';
import colors from "../Colors";
import Toolbar from "../components/Toolbar";
import Logo from "../components/Logo";

export default class ScanQR extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.darkBlue}/>

        <Toolbar>
          <RoundButton onPress={() => this.props.navigation.navigate('BackUp')}
                       image={require('../res/ic_arrow_back_white_24dp_1x.png')}/>

          <Logo title='Scan QR'/>

          <View style={{width: 45}}/>
        </Toolbar>
        <Text>ShareQR</Text>
      </View>
    );
  }


}
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});