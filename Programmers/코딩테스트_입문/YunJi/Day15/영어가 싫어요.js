function solution(numbers) {
  const alpha = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  for (let i = 0; i<alpha.length; i++) {
      numbers = numbers.split(alpha[i]).join(i);
  }
  return parseInt(numbers);
}