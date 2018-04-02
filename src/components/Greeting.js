import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text, TextInput,
  View, AsyncStorage
} from 'react-native';

import {insertJson} from "../utils/FileUtils";
import {sha256, sha256x2, sha256x2v2} from "../utils/CryptoUtils";
import {authData} from "../utils/Const";
import colors from "../utils/Colors";

// type Props = {};
export default class Greeting extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {login: '', password: '', password2: '', showLoginWarning: false, showPassWarning: false};
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
      // todo go to setUp FingerPrint or Password Layout
    }
  };

  isPassValid = () => {
    if (this.state.password.length < 3) return false;
    return this.state.password === this.state.password2;
  };


  isLoginValid = () => {
    return this.state.login.length >= 3;
  };

  render() {
    return (
      <View style={s.container}>

        <Text style={s.greeting}>
          Welcome to Internotes{'\n\n'}
          Create new account
        </Text>

        {/*Login*/}
        {this.state.showLoginWarning &&
        <Text style={s.warning}>Login should have minimum 3</Text>}
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
        <Button
          onPress={this.onPressLogin.bind(this)}
          title="LOGIN"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    );
  }


}

const s = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  greeting: {
    maxWidth: '80%',
    fontSize: 30,
    textAlign: 'center',
    color: colors.white,
    marginBottom: 50,
  },
  description: {
    fontSize: 15,
    color: colors.white
  },
  textInput: {
    fontSize: 15,
    color: colors.white
  },
  warning: {
    maxWidth: '80%',
    fontSize: 15,
    color: colors.red
  },
});
