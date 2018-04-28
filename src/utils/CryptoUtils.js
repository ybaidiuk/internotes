import SHA256 from 'crypto-js/sha256';


export default class CryptoUtils {
//tested
  static sha256(massage) {
    return SHA256(massage).toString();
  }

//tested
  static sha256x2(massage) {
    return this.sha256(this.sha256(massage));
  }
}