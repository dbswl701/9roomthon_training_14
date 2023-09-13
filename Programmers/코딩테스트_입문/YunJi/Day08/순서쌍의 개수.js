function solution(n) {
  let answer = 0;
  for (let i = 0; i<=n; i++) {
      if (n % i == 0) answer += 1;
  }
  return answer;
}