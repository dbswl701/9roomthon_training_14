function solution(n) {
  let answer = [];
  
  for(let i=2;i<=n;i++){
      for(let j of answer){
          //answer로 구한 소수로 n계속 나누기
          while (n%j == 0){
              n = parseInt(n/j);
          }
      }
      
      //위의 for문이 끝나면 n은 answer로 이미 다져진 수라서 i로 혼내줄 수 있지 않을까 싶다.
      if(n%i==0){
          n = parseInt(n/i);
          answer.push(i);    
      }
  }
  
  return answer.sort((a,b)=>a-b);
}