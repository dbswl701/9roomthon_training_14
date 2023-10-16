function solution(n) {
  let answer = 0;
  while(n) {
      answer++;
      if (answer % 3 === 0 || (answer+'').includes('3')) continue;
      n--;
  }
  return answer;
}