import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text, TextInput,
  View
} from 'react-native';

import {insertJson} from "../utils/FileUtils";
import {sha256, sha256x2, sha256x2v2} from "../utils/CryptoUtils";
import {authData} from "../utils/Const";
import colors from "../utils/Colors";
import AuthSetUp from "./AuthSetUp";

// type Props = {};
/**
 * on this Page user can LOGIN and BACKUP his notes as well.
 */
export default class Login extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      password2: '',

      showLoginWarning: false,
      showPassWarning: false,
    };
  }


  async onPressLogin() {
    const isPassValid = this.isPassValid();
    const isLoginValid = this.isLoginValid();

    isPassValid ? this.setState({showPassWarning: false}) : this.setState({showPassWarning: true});
    isLoginValid ? this.setState({showLoginWarning: false}) : this.setState({showLoginWarning: true});


    if (isLoginValid && isPassValid) {
      const dataToSave = {
        login: this.state.login,
        password: this.state.password,
        privateKey: sha256(this.state.login + this.state.password),
        id: sha256x2(this.state.login + this.state.password)
      };
      await insertJson(authData, dataToSave);
      this.props.navigation.navigate('AuthSetUp');
    }
  };

  isPassValid = () => {
    let res = false;
    const password = this.state.password;
    if (password.length >= 3 && password.indexOf(' ') === -1 && this.state.password === this.state.password2)
      res = true;
    return res;
  };


  isLoginValid = () => {
    let res = false;
    const login = this.state.login;
    if (login.length >= 3 && login.indexOf(' ') === -1)
      res = true;
    return res;
  };

  render() {
    return (
      <View style={s.container}>

        <Text style={s.greeting}>
          Welcome to Internotes
        </Text>

        <Text style={s.greetingSmall}>
          Create new account or backup old
        </Text>

        {/*Login*/}
        {this.state.showLoginWarning &&
        <Text style={s.warning}>Login should have minimum 3 letter without spaces</Text>}
        <Text style={s.description}>
          Login:
        </Text>
        <TextInput
          style={s.textInput}
          placeholder="could be your email"
          onChangeText={(text) => {
            this.setState({login: text})
          }}/>


        {/*Password*/}
        {this.state.showPassWarning &&
        <Text style={s.warning}>Password should have minimum 3 letters and be same in booth fields</Text>}
        <Text style={s.description}>
          Password:
        </Text>
        <TextInput
          style={s.textInput}
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({password: text})
          }}/>

        {/*Repeat Password*/}
        <Text style={s.description}>
          Repeat Password:
        </Text>
        <TextInput
          style={s.textInput}
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({password2: text})
          }}/>

        {/*Button*/}
        {/*<View><View/>*/}
        <View style={s.button}>
          <Button
            onPress={this.onPressLogin.bind(this)}
            title="LOGIN"
            color={colors.lightBlue}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>


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

  },
  greeting: {
    maxWidth: '80%',
    fontSize: 30,
    textAlign: 'left',
    color: colors.white,
  },
  greetingSmall: {
    maxWidth: '80%',
    fontSize: 20,
    textAlign: 'left',
    color: colors.white,
    marginBottom: 50,
  },
  description: {
    width: '80%',
    fontSize: 15,
    color: colors.white
  },
  textInput: {
    width: '80%',
    fontSize: 15,
    color: colors.white
  },
  warning: {
    width: '80%',
    fontSize: 15,
    color: colors.red
  },
  button: {
    width: '25%',
    marginTop: 30,
  }
});
