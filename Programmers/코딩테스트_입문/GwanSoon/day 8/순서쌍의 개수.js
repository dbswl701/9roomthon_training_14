function solution(n) {
  var answer = 0;
  let count = 1;
  while(true) {
      if (count > n) {
          break;
      }
      if(n % count === 0) {
          answer = answer + 1;
      }
      count = count + 1;
  }
  return answer;
}