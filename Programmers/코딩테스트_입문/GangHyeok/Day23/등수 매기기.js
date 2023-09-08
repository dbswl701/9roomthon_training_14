function solution(score) {
  var answer = [];

  answer = score.map(([a, b]) => (a+b)/2).sort((a,b)=>b-a)
  answer =  score.map(([a,b]) => (a+b)/2).map(x => answer.indexOf(x)+1);
  
  
  return answer;
}