function solution(n) {
  let answer = 0;
  let count = 0;
  for (let i = 1; i<=n; i++) {
      count = 0;
      for (let j = 1; j <= i; j++) {
          // 소수 구하기
          if (i % j === 0) count++;
      }
      if (count > 2) answer++;
  }
  return answer;
}