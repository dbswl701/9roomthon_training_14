function solution(numbers) {
  let answer = 0;
  let sum = 0;
  for (let i=0; i<numbers.length; i++) {
      sum += numbers[i]
  }
  return sum/numbers.length;
}