function solution(numer1, denom1, numer2, denom2) {
  let answer = []
  const denom = numer1*denom2 + numer2*denom1; // 분자
  const numer = denom1*denom2; // 분모
  
  // 최대공약수 구하기
  const gcd = (denom, numer) => (denom%numer === 0 ? numer : gcd(numer, denom%numer))
  
  answer[0] = denom / gcd(denom,numer);
  answer[1] = numer / gcd(denom,numer);
  
  return answer;
}
