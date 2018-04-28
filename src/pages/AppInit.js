import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, Text, View} from "react-native";
import colors from "../Colors";
import {Platform, StyleSheet} from "react-native";
import DbUtils from "../utils/DbUtils";
import {AUTH_DATA} from "../Const";
import UserDataUtils from "../utils/UserDataUtils";


const busyIndicatorSize = Platform.select({
  ios: 'large',
  android: 50
});
export default class AppInit extends Component<Props> {
  constructor(props) {
    super(props);
    this.loadUserData()
  }

  async loadUserData() {
    console.log("loadUserData");
    const data = await DbUtils.readJson(AUTH_DATA);
    console.log(data);
    const dataIsValid = UserDataUtils.verifyUserData(data);
    this.props.navigation.navigate(dataIsValid ? 'Auth' : 'Login');
  }


  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor={colors.darkBlue}/>
        <ActivityIndicator size={busyIndicatorSize} color={colors.lightBlue}/>
      </View>
    );
  }


}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  }
});