function solution(sides) {
  var answer = 0;
  
//     //sides의 긴 변이 가장 큰 변
//     for(let i =Math.max(...sides)-Math.min(...sides)+1;i<=Math.max(...sides);i++){
//         answer++;
//     }
  
//     //없는 변이 가장 긴 변
//     for(let i=Math.max(...sides)+1;i<sides[0]+sides[1];i++){
//         answer++;
//     }
  
  answer+=sides[0]+sides[1]-(Math.max(...sides)+1) + Math.min(...sides);
  
  return answer;
}