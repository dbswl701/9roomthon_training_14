function solution(emergency) {
  var answer = [...emergency];
  emergency.sort((a, b)=>b-a)
  
  return answer.map((a)=>emergency.indexOf(a)+1);
}