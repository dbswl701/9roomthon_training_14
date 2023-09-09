function solution(prices) {
  var answer = [];
  
  prices.forEach((itm, idx)=>{
      let up =0;
      
      if(idx==prices.length-1){
          answer[idx]=0;
      }
      else{
      for(let i=idx+1;i<prices.length;i++){
          if(itm<=prices[i]){
              
              up++;
              
              answer[idx]=up;
          }
          else{
              up++;
              answer[idx]=up;
              break;
          }
          
          }
      }
  });
  return answer;
}