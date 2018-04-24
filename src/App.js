import React from 'react';

import AppInit from "./pages/AppInit";
import Login from "./pages/Login";
import AuthSetUp from "./pages/AuthSetUp";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import {DrawerNavigator, SwitchNavigator} from "react-navigation";
import Exemple from "./pages/Exemple";
import NoteEditor from "./pages/NoteEditor";
import colors from "./Colors";

const Draver = DrawerNavigator({
  Main: {
    screen: Main,
  },
  Exemple: {
    screen: Exemple,
  }
}, {
  drawerBackgroundColor: colors.blue,
  drawerWidth: 250,
  contentOptions: {
    activeTintColor: colors.white,
    //https://reactnavigation.org/docs/drawer-navigator.html#drawernavigatorconfig
  }
});

export default SwitchNavigator(
  {
    AppInit: AppInit,

    Login: Login,
    AuthSetUp: AuthSetUp,

    Auth: Auth,
    Main: Draver,
    NoteEditor: NoteEditor,

    // NoteEditor: StackNavigator({NoteEditor: NoteEditor})
  },
  {
    initialRouteName: 'AppInit',
  }
);