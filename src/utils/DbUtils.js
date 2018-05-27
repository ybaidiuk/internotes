import {AsyncStorage} from 'react-native';

// should be also tested but i don't know how

export default class DbUtils {
  // exemple:  insertDaata('test', 'YEVHEN');
  static async insert(key, data) {
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
  // if not exist return null
  static async read(key) {
    try {
      // await AsyncStorage.clear();
      const value = await AsyncStorage.getItem(key.toString());
      // console.log(`read successful \'${key}\'`);
      // console.log(value);
      return value;
    } catch (error) {
      console.log(error);
      console.warn(`error while READ data with \'${key}\'`);
    }
  }

  static remove(key) {
    AsyncStorage.removeItem(key.toString(), err => {
      if (err) console.warn(`error while REMOVING data with \'${key}\'`, err);
      else console.log(`remove successful \'${key}\'`);
    });
  }

  // exemple: DbUtils.insertJson('test', {age: 25}');
  static async insertJson(key, data) {
    await this.insert(key, JSON.stringify(data));
  }


  static async readJson(key) {
    let res = await this.read(key);
    return JSON.parse(res);//if not exist return null
  }
}
