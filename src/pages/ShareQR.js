import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import RoundButton from "../components/RoundButton";
import colors from "../Colors";
import Toolbar from "../components/Toolbar";
import Logo from "../components/Logo";
import NetworkUtils from "../utils/NetworkUtils";

export default class ShareQR extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount(){
    console.log("ShareQR");
    // const ip = await NetworkUtils.getIp();
    // console.log(ip)
    //router      ip 213.147.167.78
    //subnetwork  ip ARP 192.168.8.101
  }




  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.darkBlue}/>

        <Toolbar>
          <RoundButton onPress={() => this.props.navigation.navigate('BackUp')}
                       image={require('../res/ic_arrow_back_white_24dp_1x.png')}/>

          <Logo title='Share QR'/>

          <RoundButton //onPress={()=>this.setState({showOption: true})}
                       image={require('../res/ic_share_white_24dp_1x.png')}/>
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