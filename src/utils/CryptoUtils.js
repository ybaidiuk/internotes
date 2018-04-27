import SHA256 from 'crypto-js/sha256';


//tested
export function sha256(massage) {
  return SHA256(massage).toString();
}

//tested
export function sha256x2(massage) {
  return sha256(sha256(massage));
}