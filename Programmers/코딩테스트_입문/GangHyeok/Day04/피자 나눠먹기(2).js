function solution(n) {
  var answer = 0;
  
  const six = [6, 3, 2, 1];
  for(let i of six){
      if(n %i == 0){
          answer = i;
          break;
      }
  }
  
  answer = n/answer
  
  return answer;
}