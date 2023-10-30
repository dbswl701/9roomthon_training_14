function solution(n) {
  var answer = 0;
  for (let i = n; i >= 1; i--) {
      // i가 합성수인지 비교하는 숫자.
      let count = false; // 왜 count = false 여야 하는가?
      for(let num = 2; num < i-1; num++) {
          if(i % num === 0) {
              // 합성수
              count = true;
          }
      }
      // count => 합성수 여부를 확인한다.
      if(count) {
          answer += 1;
      }
  }
  return answer;
}