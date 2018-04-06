import {sha256} from "../src/utils/CryptoUtils";
import {verifyUserData} from "../src/utils/UserDataUtils";

it('verifyUserData', () => {
  expect(verifyUserData({})).toBe(false);

  const privateKey = sha256('testLogin' + 'testPassword');
  const id = sha256(privateKey);
  let testUserData = {
    login: 'testLogin',
    password: 'testPassword',
    privateKey: privateKey,
    id: id
  };
  expect(verifyUserData(testUserData)).toBe(true);

  testUserData.privateKey = id;
  expect(verifyUserData(testUserData)).toBe(false);

  testUserData.privateKey = privateKey;
  testUserData.id = privateKey;
  expect(verifyUserData(testUserData)).toBe(false);
});