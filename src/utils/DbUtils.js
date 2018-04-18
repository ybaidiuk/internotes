import {AsyncStorage} from 'react-native';


// exemple:  insertDaata('test', 'YEVHEN');
export async function insertString(key, data) {
  try {
    await AsyncStorage.setItem(key, data);
    console.log(`write data successful  '${key}'`);
    console.log(data);
  } catch (error) {
    console.log(error);
    console.warn(`error while WRITHING data with '${key}'`);
  }

}

// exemple: const val = await readData('test');
export async function readString(key) {
  try {
    // await AsyncStorage.clear();
    const value = await AsyncStorage.getItem(key);
    console.log(`read successful '${key}'`);
    console.log(value);
    return value;
  } catch (error) {
    console.log(error);
    console.warn(`error while READ data with '${key}'`);
  }
}


// exemple:  insertJson('test', {age: 25}');
export async function insertJson(key, data) {
  await insertString(key, JSON.stringify(data));
}


export async function readJson(key) {
  let res = await readString(key.toString());
  return JSON.parse(res);
}