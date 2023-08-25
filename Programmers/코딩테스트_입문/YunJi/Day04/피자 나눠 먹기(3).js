function solution(slice, n) {
  let answer = 1;
  let temp = slice
  while (temp < n) {
      temp += slice
      answer += 1
  }
  return answer;
}