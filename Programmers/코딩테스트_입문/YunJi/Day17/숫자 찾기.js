function solution(num, k) {
  var answer = -1;
  [...String(num)].forEach((v, idx) => {
      if (v == k && answer === -1) answer = idx+1;
  });
  return answer;
}