function solution(order) {
  let answer = 0;
  const StrOrder = String(order);
      for( i = 0; i < StrOrder.length; i++) {
          const item = StrOrder[i]
          if ( item === '3' || item === '6' || item === '9' )
              answer += 1;
              
      }
  return answer;
}