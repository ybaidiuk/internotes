import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import RoundButton from '../components/RoundButton';
import colors from '../Colors';
import Toolbar from '../components/Toolbar';
import Logo from '../components/Logo';

export default class ShareQR extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    console.log('ShareQR');
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.darkBlue} />

        <Toolbar>
          <RoundButton
            onPress={() => this.props.navigation.navigate('BackUp')}
            image={require('../res/ic_arrow_back_white_24dp_1x.png')}
          />

          <Logo title="Share QR" />

          <RoundButton //onPress={()=>this.setState({showOption: true})}
            image={require('../res/ic_share_white_24dp_1x.png')}
          />
        </Toolbar>
        <Text>ShareQR</Text>
      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  }
});
