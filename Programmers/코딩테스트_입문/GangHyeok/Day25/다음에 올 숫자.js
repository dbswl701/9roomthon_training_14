function solution(common) {
  var answer = 0;
  
   if(common[1] - common[0] == common[common.length-1] - common[common.length-2]){
          answer = 2*common[common.length-1] - common[common.length-2];
      }
      else{
          answer = common[common.length-1]*(common[common.length-1] / common[common.length-2]);
      }
  return answer;
}