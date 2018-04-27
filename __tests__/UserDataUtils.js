import {sha256} from "../src/utils/CryptoUtils";
import UserDataUtils from "../src/utils/UserDataUtils";

it('verifyUserData', () => {
  expect(UserDataUtils.verifyUserData({})).toBe(false);

  const privateKey = sha256('testLogin' + 'testPassword');
  const id = sha256(privateKey);
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