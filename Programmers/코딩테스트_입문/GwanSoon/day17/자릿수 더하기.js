function solution(n) {
  var answer = 0;
  let StrN = String(n);
  for (let i = 0; i<StrN.length; i++) {
      const item = StrN[i];
      answer += Number(item);
  }
  return answer;
}