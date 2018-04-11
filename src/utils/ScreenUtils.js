import {Dimensions} from "react-native";

export function isPortrait() {
  const screen = Dimensions.get('screen');
  return screen.height > screen.width;
}