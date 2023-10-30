function solution(my_str, n) {
  let answer = [];
  let cnt = 0;
  for ( let i = 0; i < my_str.length; i+= n ) {
      answer.push(my_str.slice(i, i + n));
  }
  return answer;
}