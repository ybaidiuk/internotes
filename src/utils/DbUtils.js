import {AsyncStorage} from 'react-native';


// exemple:  insertDaata('test', 'YEVHEN');
export async function insert(key, data) {
  try {
    await AsyncStorage.setItem(key.toString(), data);
    console.log(`write data successful  \'${key}\'`);
    console.log(data);
  } catch (error) {
    console.log(error);
    console.warn(`error while WRITHING data with \'${key}\'`);
  }

}

// exemple: const val = await readData('test');
export async function read(key) {
  try {
    // await AsyncStorage.clear();
    const value = await AsyncStorage.getItem(key.toString());
    console.log(`read successful \'${key}\'`);
    console.log(value);
    return value;
  } catch (error) {
    console.log(error);
    console.warn(`error while READ data with \'${key}\'`);
  }
}

export function remove(key) {
  AsyncStorage.removeItem(key.toString(), err => {
    if (err)
      console.warn(`error while REMOVING data with \'${key}\'`, err)
    else
      console.log(`remove successful \'${key}\'`);
  });
}


// exemple:  insertJson('test', {age: 25}');
export async function insertJson(key, data) {
  await insert(key, JSON.stringify(data));
}


export async function readJson(key) {
  let res = await read(key);
  return JSON.parse(res);
}