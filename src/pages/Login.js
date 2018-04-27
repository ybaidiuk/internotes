import React, {Component} from 'react';
import {
  Button, StatusBar,
  StyleSheet,
  Text, TextInput,
  View
} from 'react-native';
import colors from "../Colors";
import AuthSetUp from "./AuthSetUp";
import UserDataUtils from "../utils/UserDataUtils";

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
    const loginValid = UserDataUtils.isLoginValid(this.state.login);
    const passValid = UserDataUtils.isPassValid(this.state.password, this.state.password2);

    passValid ? this.setState({showPassWarning: false}) : this.setState({showPassWarning: true});
    loginValid ? this.setState({showLoginWarning: false}) : this.setState({showLoginWarning: true});

    if (loginValid && passValid) {
      await  UserDataUtils.saveUserData(this.state.login, this.state.password);
      this.props.navigation.navigate('AuthSetUp');
    }
  };

  render() {
    return (
      <View style={s.container}>
       <StatusBar backgroundColor={colors.darkBlue}/>

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
          underlineColorAndroid={colors.lightBlue}
          style={s.textInput}
          placeholder="Could be your email"
          placeholderTextColor={colors.lightBlue}
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
          underlineColorAndroid={colors.lightBlue}
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
          underlineColorAndroid={colors.lightBlue}
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
    backgroundColor: colors.black,
  },
  greeting: {
    maxWidth: '80%',
    fontSize: 30,
    textAlign: 'left',
    color: colors.white
  },
  greetingSmall: {
    maxWidth: '80%',
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 50,
    color: colors.white
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
