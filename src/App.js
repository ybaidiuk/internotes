import React from 'react';

import AppInit from "./pages/AppInit";
import Login from "./pages/Login";
import AuthSetUp from "./pages/AuthSetUp";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import {DrawerNavigator, StackNavigator, SwitchNavigator} from "react-navigation";
import Exemple from "./pages/Exemple";



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




