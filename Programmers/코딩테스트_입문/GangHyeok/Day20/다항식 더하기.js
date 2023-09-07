function solution(polynomial) {
  var answer = '';
  
  let result = polynomial.split(' + ').reduce((prev, curr) =>{
      // x가 있는지 없는지에 따라 구분해서 더하기, x만 있으면 parseInt NaN떠서 그 경우 분리
      curr.includes('x')?prev[0]+=isNaN(parseInt(curr))?1:parseInt(curr):prev[1]+=parseInt(curr);
      return prev;
      
  }, [0,0]);
  
  if(result[0]) answer+=result[0]==1?'x':result[0]+'x'; //x의 계수가 1이면 생략
  if(result[0] && result[1]) answer+=' + ';
  if(result[1]) answer+=result[1];
  return answer;
}