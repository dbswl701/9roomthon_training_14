function solution(a, b) {
  let answer = 2;
  
  // 약분
  for(let i = 2; i<=a; i++) {
      if (a % i === 0 && b % i === 0) {
          a = a / i;
          b = b / i;
      }
  }
      
  // 분모의 소인수가 2, 5만 있는지 확인
  while(true) {
      if (b === 1) {
          answer = 1;
          break;
      }
      else if (b % 2 === 0) b = b / 2;
      else if (b % 5 === 0) b = b / 5;
      else break;
  }
  
  return answer;
}