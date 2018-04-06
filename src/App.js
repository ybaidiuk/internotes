import {StackNavigator, SwitchNavigator} from "react-navigation";
import AppInit from "./components/AppInit";
import Login from "./components/Login";
import AuthSetUp from "./components/AuthSetUp";
import Auth from "./components/Auth";
import Main from "./components/Main";


export default SwitchNavigator(
  {
    AppInit: AppInit,
    Login: Login,
    Auth: Auth,
    AuthSetUp: AuthSetUp,
    Main: Main,
    // Auth: StackNavigator({Auth: Auth}),
  },
  {
    initialRouteName: 'AppInit',
  }
);






