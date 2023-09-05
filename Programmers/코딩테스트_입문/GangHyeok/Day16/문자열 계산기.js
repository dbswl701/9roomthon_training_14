function solution(my_string) {
  var answer = 0;
  
  my_string.split(' ').forEach((x, idx, arr)=>{
      if(idx==0){
          answer+=Number(x);
      }
      else if(x == '+'){
          answer+=parseInt(arr[idx+1]);
      }else if(x=='-'){
          answer-=parseInt(arr[idx+1]);
      }
  })
  
  return answer;
}