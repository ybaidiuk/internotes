import {AsyncStorage} from 'react-native';


// exemple:  writeData('test', 'YEVHEN');
export async function writeData(key, data) {
  try {
    await AsyncStorage.setItem(key, data);
    console.log('write data successful')
  } catch (error) {
    console.log(error);
    console.warn('error while WRITHING data with key' + key);
  }

}

// exemple: const val = await readData('test');
export async function readData(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // console.log("read successful");
      // console.log(value);
      return value;
    }
  } catch (error) {
    console.log(error);
    console.warn('error while READ data with key' + key);
  }
}