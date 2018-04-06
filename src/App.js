import React from 'react';

import AppInit from "./components/AppInit";
import Login from "./components/Login";
import AuthSetUp from "./components/AuthSetUp";
import Auth from "./components/Auth";
import Main from "./components/Main";
import {DrawerNavigator, StackNavigator, SwitchNavigator} from "react-navigation";
import Exemple from "./components/Exemple";



const Draver = DrawerNavigator({
  Main: {
    screen: Main,
  },
  Exemple: {
    screen: Exemple,
  }
});

export default SwitchNavigator(
  {
    AppInit: AppInit,

    Login: Login,
    AuthSetUp: AuthSetUp,

    Auth: Auth,
    Main: Draver,

    // Auth: StackNavigator({Auth: Auth}),
  },
  {
    initialRouteName: 'AppInit',
  }
);




