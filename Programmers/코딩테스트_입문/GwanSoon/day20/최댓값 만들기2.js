function solution(numbers) {
  numbers.sort();
  let answer = numbers[0] * numbers[1];
  for (let i = 2; i < numbers.length; i++) {
      answer = Math.max(answer, numbers[i - 1] * numbers[i]);
  }
  return answer;
}