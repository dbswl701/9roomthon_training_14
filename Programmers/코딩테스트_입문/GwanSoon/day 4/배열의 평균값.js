function solution(numbers) {
  var answer = 0;
  let sum = 0;
  let cnt = 0;
  while(cnt < numbers.length) {
      sum = sum + numbers[cnt];
      cnt = cnt + 1;
  }
  
  return sum / numbers.length;
}
