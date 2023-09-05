function solution(array) {
  let answer = [];
  array.forEach((x, idx)=>{
      if(x == Math.max(...array)){
          answer = [x, idx];
      }
  })    
  
  return answer;
}