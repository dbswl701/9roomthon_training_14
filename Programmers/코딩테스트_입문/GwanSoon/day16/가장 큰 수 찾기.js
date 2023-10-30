function solution(array) {
  let a = Math.max(...array);
  return [a, array.indexOf(a)]
}