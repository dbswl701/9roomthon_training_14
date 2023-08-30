function solution(balls, share) {
  let answer = 1;
  
  for(let i =0;i<share;i++){
      answer*=balls--;
  }
  
  for(share;share>0;share--){
      answer/=share;
  }
  
  return parseInt(answer);
}