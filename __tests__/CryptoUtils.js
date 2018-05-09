import CryptoUtils from '../src/utils/CryptoUtils';

it('CryptoUtils', () => {
  expect(CryptoUtils.sha256(CryptoUtils.sha256('qwerty'))).toBe(CryptoUtils.sha256x2('qwerty'));
});
