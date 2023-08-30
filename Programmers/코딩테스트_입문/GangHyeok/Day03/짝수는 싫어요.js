function solution(n) {
  var answer = [];
  var m = parseInt(n%2==0?n/2:n/2+1);
  
  for(let i=0;i<m;i++){
      answer[i] = 2*i+1;
  }
  
  return answer;
}