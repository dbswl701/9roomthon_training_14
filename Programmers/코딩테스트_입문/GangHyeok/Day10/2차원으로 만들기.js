function solution(num_list, n) {
  let answer = [];
  let l = num_list.length
  for (let i=0;i<l;i+=n){
      answer.push(num_list.slice(i,i+n));
  }
  
  return answer;
}