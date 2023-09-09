function solution(my_string) {
    
  let answer = my_string.split(/[^0-9]/g).filter(x => x).map(x => parseInt(x))
      
  return answer.length?answer.reduce((a,b)=>a+b):0;
}