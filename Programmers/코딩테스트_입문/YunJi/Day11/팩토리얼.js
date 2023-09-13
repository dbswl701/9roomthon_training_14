function solution(n) {
  let num = 1;
  let result = 1;
  while (result*num < n) {
      num += 1;
      result = result * num;
  }
  return num;
}