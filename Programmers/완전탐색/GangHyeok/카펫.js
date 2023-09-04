function solution(brown, yellow) {
  var answer = [];
  answer[0] = ((4+brown) + parseInt(Math.sqrt((4+brown)*(4+brown) - (16*(brown+yellow)))))/4;
  answer[1] = ((4+brown) - parseInt(Math.sqrt((4+brown)*(4+brown) - (16*(brown+yellow)))))/4;
               
 
  
  return answer;
}