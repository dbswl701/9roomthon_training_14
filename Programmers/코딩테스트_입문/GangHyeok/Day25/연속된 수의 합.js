function solution(num, total) {
  var answer = [];
  
  // 연속된 수 => 1~num까지의 합을 구하고 주어진 total에 빼기
  // total과 num까지 합과의 차를 num으로 나눠서 배열 각 요소에 골고루 나눠주기
  for(let i =1;i<=num;i++){
      answer[i-1] = i + (total - num*(num+1)/2)/num;
  }  
  return answer;
}