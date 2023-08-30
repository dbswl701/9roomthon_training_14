function solution(age) {
  var answer = [];
  var ans = ''
  
  
  while(age>0){
      answer[answer.length] = age%10;
      age=parseInt(age/10);
  }
  
  for(let i = answer.length-1;i>=0;i--){
      ans+=String.fromCharCode(answer[i] +97)
  }
  
  return ans;
}