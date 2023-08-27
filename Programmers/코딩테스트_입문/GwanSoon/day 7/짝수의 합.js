function solution(n) {
  let count = 1; // n을 카운트하는 함수 하나
  let sum = 0; // 숫자 0부터 주어지는 정수 나열 하나
  while(count <= n) { // n이 카운트보다 크거나 같을때
      if(count % 2 === 0){ // 카운트가 짝수이면
          sum = sum + count; // sum에 카운트를 더하고
      }
      count = count + 1 // 다시 카운트를 n+1 만들어서, n보다 크면 끝나도록.
  }
  
  return sum;
}