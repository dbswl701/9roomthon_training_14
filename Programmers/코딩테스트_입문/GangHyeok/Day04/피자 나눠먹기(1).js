function solution(n) {
  var answer = parseInt(n/7);
  
  if(n%7 > 0){
      answer++;
  }
  
  return answer;
}