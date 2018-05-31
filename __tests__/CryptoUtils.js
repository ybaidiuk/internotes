import CryptoUtils from '../src/utils/CryptoUtils';

it('CryptoUtilsSha256Test', () => {
  expect(CryptoUtils.sha256(CryptoUtils.sha256('qwerty'))).toBe(CryptoUtils.sha256x2('qwerty'));
  expect(CryptoUtils.sha256('qwerty')).toEqual(expect.not.stringMatching(CryptoUtils.sha256('qweRty')));
});

it('CryptoUtilsEncryptTextTest', () => {
  const text = "Hello World ,\n  i'm love Bitcoin";
  console.log(text);
  const privateKey = CryptoUtils.sha256("LiteCoin");

  const encryptedText = CryptoUtils.encrypt(text, privateKey);
  console.log(encryptedText);

  const message = CryptoUtils.decrypt(encryptedText, privateKey);
  console.log(message);

  //check decryption
  expect(text).toBe(message);


  const encryptedText2 = CryptoUtils.encrypt(text, privateKey);
  const message2 = CryptoUtils.decrypt(encryptedText2, privateKey);
  console.log(encryptedText);
  console.log(encryptedText2);
  console.log(message);
  console.log(message2);
  expect(message).toBe(message2);
});
