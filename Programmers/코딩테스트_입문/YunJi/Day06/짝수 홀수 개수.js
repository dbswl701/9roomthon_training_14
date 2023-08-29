function solution(num_list) {
  let odd = 0; // 홀수
  let even = 0; // 짝수
  
  for (let num of num_list) {
      if (num%2) odd++;
      else even++;
  }
  return [even, odd];
}