function solution(n) {
  var answer = [];
  let count = 0;
  let check = false;
  for (let i = 2; i<=n; i++) {
      // 소수가 아닌건 판별

      // 약수라면
      if (n % i === 0) {
          // 소인수인지 검사
          for (let j of answer) {
              // 약수가 소인수로 나눠진다면 건너뛴다.
              if (i % j === 0) check = true;
          }
          if (check === false) answer.push(i);
      }
      check = false;
  }

  return answer;
}
