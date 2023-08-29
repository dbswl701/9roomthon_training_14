function solution(numbers) {
  const arr = []
  for (let i = 0; i<numbers.length; i++){
      arr[i] = numbers[i] * 2;
  }
  return arr;
}