import React, {Component} from 'react';
import {Image, Platform, SectionList, Share, StatusBar, StyleSheet, Text, Vibration, View} from 'react-native';
import RoundButton from "../components/RoundButton";
import PropTypes from 'prop-types';
import colors from "../Colors";
import DbUtils from "../utils/DbUtils";
import NoteDaoUtils from "../utils/NoteDaoUtils";
import {NOTE_IDS_ARR} from "../Const";
import PopUp from "../components/PopUp";
import SquareButton from "../components/SquareButton";
import Toolbar from "../components/Toolbar";
import Logo from "../components/Logo";

export default class BackUp extends Component<Props> {
  static navigationOptions = {
    drawerLabel: 'BackUp',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../res/ic_backup_white_24dp_1x.png')}
        style={{tintColor: tintColor}}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {showOption: false};
  }



  toggleDrawer = () => {
    this.props.navigation.navigate('DrawerToggle');
  };


  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.darkBlue}/>

        <PopUp onRequestClose={() => this.setState({showOption: false})}
               visible={this.state.showOption}
               style={s.modal}>
          <SquareButton title={'Share my QR'}/>
          <SquareButton title={'Scan QR'}/>
        </PopUp>

        <Toolbar>
          <RoundButton onPress={this.toggleDrawer}
                       image={require('../res/ic_menu_white_24dp_1x.png')}/>

          <Logo title='BackUp'/>

          <RoundButton onPress={()=>this.setState({showOption: true})}
                       image={require('../res/ic_more_vert_white_24dp_1x.png')}/>
        </Toolbar>

        {/*<SectionList todo backUP list */}
          {/*indicatorStyle='white'*/}
          {/*renderItem={({item: note, index}) => <ListItem key={index} note={note}*/}
                                                         {/*onLongPress={this.showPopUp.bind(this)}/>}*/}
          {/*ItemSeparatorComponent={() => <View style={s.separator}/>}*/}
          {/*sections={[*/}
            {/*{data: this.state.noteArr},*/}
          {/*]}*/}
          {/*keyExtractor={(item, index) => item + index}*/}
        {/*/>*/}
      </View>
    );
  }


}
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  separator: {
    height: 2,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: colors.darkBlue
  },
  modal: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});