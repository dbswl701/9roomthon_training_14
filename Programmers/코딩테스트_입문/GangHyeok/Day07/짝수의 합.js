function solution(n) {
  var answer = 0;
  
  answer = Math.floor(n/2);
  
  answer = answer * (answer + 1);
  
  
  return answer;
}