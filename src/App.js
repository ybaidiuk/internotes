import React from 'react';

import AppInit from "./components/AppInit";
import Login from "./components/Login";
import AuthSetUp from "./components/AuthSetUp";
import Auth from "./components/Auth";
import Main from "./components/Main";
import {StackNavigator, SwitchNavigator} from "react-navigation";


export default SwitchNavigator(
  {
    AppInit: AppInit,

    Login: Login,
    AuthSetUp: AuthSetUp,

    Auth: Auth,
    Main: Main,
    // Auth: StackNavigator({Auth: Auth}),
  },
  {
    initialRouteName: 'AppInit',
  }
);






