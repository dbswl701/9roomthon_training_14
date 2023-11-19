function solution(prices) {
  const answer = [...prices].fill(0);
  const stack = [];
  
  for (let i = 0; i<prices.length; i++) {
      // 가격이 떨어진다면
      while (stack.length > 0 && prices[i] < prices[stack[stack.length-1]]) {
          // 현재 시간인 i와 가격의 인덱스를 이용해 answer를 구해준다.
          const top = stack.pop();
          answer[top] = i - top;
      }
      stack.push(i);
  }
  
  // 가격이 떨어지지 않은, stack의 남은것들 처리
  while(stack.length > 0) {
      const top = stack.pop();
      answer[top] = prices.length - top - 1;
  }
  
  return answer;
}