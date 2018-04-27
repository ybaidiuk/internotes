//tested
export default class DataUtils {

  static timeStampToFormatedData(timestamp) {
    const date = new Date(timestamp);
    return date.getDate() + '/' +
      (date.getMonth() + 1) + '/' +
      date.getFullYear() + ' ' +

      this.addZero(date.getHours()) + ':' +
      this.addZero(date.getMinutes());
  }

  static addZero(int) {
    return int < 10 ? '0' + int : int;
  }
}