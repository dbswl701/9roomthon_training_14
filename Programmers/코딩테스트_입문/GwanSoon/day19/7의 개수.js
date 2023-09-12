function solution(array) {
  let answer = 0;
  let str1 = String(array);
  let SprArr = [...str1];
      for ( let i = 0; i < SprArr.length; i++ ) {
          if ( SprArr[i] === "7" ) {
              answer += 1;
          }
      }
  
  return answer;
}