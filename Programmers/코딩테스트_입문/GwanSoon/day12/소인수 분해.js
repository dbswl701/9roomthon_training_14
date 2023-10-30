function solution(n) {
  var answer = [];
  for (let i = 2; n !== 1; i++) {
      if (n % i === 0) {
          while (n % i === 0) {
              n /= i;
          }
          answer.push(i);
      }
  }
  return answer;
}