function solution(array, n) {
  let answer = 0;
  array.forEach(v => {
      if (v === n) answer++;
  })
  return answer;
}