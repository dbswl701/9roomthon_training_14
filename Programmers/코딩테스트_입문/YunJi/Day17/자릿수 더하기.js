function solution(n) {
  return n.toString().split('').map(v=> +v).reduce((acc, cur) => acc + cur);
}