function solution(s){
  var answer = 0;

  for(let i of s){
      if(i == '('){
          answer+=1;
      }
      else if(i == ')'){
          answer-=1;
      }
      // console.log(answer);
      if(answer < 0){
          return false;
      }
  }
  
  if(answer == 0){
      return true;
  }
  else{
   return false;
  }
}