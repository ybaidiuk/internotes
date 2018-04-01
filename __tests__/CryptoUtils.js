import {sha256, sha256x2} from "../src/utils/CryptoUtils";

it('CryptoUtils', () => {
  expect(sha256(sha256("qwerty"))).toBe(sha256x2('qwerty'));
});