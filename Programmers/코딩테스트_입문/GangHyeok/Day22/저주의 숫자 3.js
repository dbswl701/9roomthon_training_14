function solution(n) {
  var answer = [];
  
  for (let i=0;i<n;i++){
      let tmp=answer[0]?answer[i-1]+1:1;
      while(tmp!=check3(tmp)){
          tmp=check3(tmp);
      }
      answer.push(tmp);
  }
  return answer[answer.length-1];
}

function check3(number){
  
  if(number%3==0){
      number++;
  }
  else if(number.toString().includes('3')){
      number++;
  }
  
  return number;
}