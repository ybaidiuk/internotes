import UserDataUtils from '../src/utils/UserDataUtils';
import CryptoUtils from '../src/utils/CryptoUtils';

it('verifyUserData', () => {
  expect(UserDataUtils.verifyUserData({})).toBe(false);

  const privateKey = CryptoUtils.sha256('testLogin' + 'testPassword');
  const id = CryptoUtils.sha256(privateKey);
  let testUserData = {
    login: 'testLogin',
    password: 'testPassword',
    privateKey: privateKey,
    id: id
  };
  expect(UserDataUtils.verifyUserData(testUserData)).toBe(true);

  testUserData.privateKey = id;
  expect(UserDataUtils.verifyUserData(testUserData)).toBe(false);

  testUserData.privateKey = privateKey;
  testUserData.id = privateKey;
  expect(UserDataUtils.verifyUserData(testUserData)).toBe(false);
});
