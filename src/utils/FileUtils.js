import {AsyncStorage} from 'react-native';


// exemple:  insertDaata('test', 'YEVHEN');
export async function insertString(key, data) {
  try {
    await AsyncStorage.setItem(key, data);
    console.log('write data successful')
  } catch (error) {
    console.log(error);
    console.warn('error while WRITHING data with key ' + key);
  }

}

// exemple: const val = await readData('test');
export async function readString(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // console.log("read successful");
      // console.log(value);
      return value;
    }
  } catch (error) {
    console.log(error);
    console.warn('error while READ data with key ' + key);
  }
}


// exemple:  insertJson('test', {age: 25}');
export async function insertJson(key, data) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    console.log('write data successful')
  } catch (error) {
    console.log(error);
    console.warn('error while WRITHING data with key ' + key);
  }

}


export async function readJson(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // console.log("read successful");
      // console.log(value);
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
    console.warn('error while READ data with key ' + key);
  }
}