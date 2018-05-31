import SHA256 from 'crypto-js/sha256';
import CryptoJS from 'crypto-js';

export default class CryptoUtils {
  //tested
  static sha256(massage) {
    return SHA256(massage).toString();
  }

  //tested
  static sha256x2(massage) {
    return this.sha256(this.sha256(massage));
  }

  //tested
  static encrypt(text, key) {
    return CryptoJS.AES.encrypt(text, key).toString();
  }
//tested
  static decrypt(cipherText, key) {
    let bytes = CryptoJS.AES.decrypt(cipherText, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}