import SHA256 from 'crypto-js/sha256';

export function sha256(massage) {
  return SHA256(massage).toString();
}

export function sha256x2(massage) {
  return sha256(sha256(massage));
}