function solution(slice, n) {
  var answer = parseInt(n/slice) + (n%slice>0?1:0);

  return answer;
}