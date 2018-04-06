import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, Text, View} from "react-native";
import colors from "../utils/Colors";
import {Platform,StyleSheet} from "react-native";
import {readJson} from "../utils/FileUtils";
import {authData} from "../utils/Const";


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
    const data = await readJson('a');//todo authData
    console.log(data);
    this.props.navigation.navigate(data ? 'Auth' : 'Login');
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar barStyle={"light-content"}/>
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
    backgroundColor: colors.barkBlue,
  }
});