import React from 'react';

import AppInit from './pages/AppInit';
import Login from './pages/Login';
import AuthSetUp from './pages/AuthSetUp';
import Auth from './pages/Auth';
import Main from './pages/Main';
import {createDrawerNavigator, createSwitchNavigator} from 'react-navigation';
import NoteEditor from './pages/NoteEditor';
import colors from './Colors';
import BackUp from './pages/BackUp';
import ScanQR from './pages/ScanQR';
import ShareQR from './pages/ShareQR';
import {YellowBox} from 'react-native';
import Logs from "./pages/Logs";
// todo remove later . react-native use isMounted() itself (since version 55)
// RCTImageLoader   ---> https://github.com/facebook/react-native/issues/17504
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Class RCTCxxModule', 'Module RCTImageLoader']);

const Draver = createDrawerNavigator(
  {
    Main: {
      screen: Main
    },
    BackUp: {
      screen: BackUp
    },
    Logs: {
      screen: Logs
    }
  },
  {
    drawerBackgroundColor: colors.blue,
    drawerWidth: 250,
    contentOptions: {
      activeTintColor: colors.white
      //https://reactnavigation.org/docs/drawer-navigator.html#drawernavigatorconfig
    }
  }
);

export default createSwitchNavigator(
  {
    AppInit: AppInit,

    Login: Login,
    AuthSetUp: AuthSetUp,

    Auth: Auth,
    Main: Draver,
    NoteEditor: NoteEditor,
    ShareQR: ShareQR,
    ScanQR: ScanQR

    // NoteEditor: StackNavigator({NoteEditor: NoteEditor})
  },
  {
    initialRouteName: 'AppInit'
  }
);
