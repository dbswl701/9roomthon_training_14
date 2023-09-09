function solution(num_list) {
  var answer = [];
  
   for(let i = num_list.length - 1 ; i >=0 ;i--){
          answer[num_list.length - i-1] = num_list[i];
      }
  return answer;
}