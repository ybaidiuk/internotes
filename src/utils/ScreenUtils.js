import {Dimensions} from 'react-native';

export default class ScreenUtils {
  static isPortrait() {
    const screen = Dimensions.get('screen');
    return screen.height > screen.width;
  }
}
