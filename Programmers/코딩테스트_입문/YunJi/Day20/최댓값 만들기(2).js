function solution(numbers) {
  const length = numbers.length
  let max1 = 0, max2 = 0, min1 = 0, min2 = 0;
  max1 = Math.max(...numbers)
  numbers.splice(numbers.indexOf(max1), 1)

  max2 = Math.max(...numbers)
  numbers.splice(numbers.indexOf(max2), 1)

  if (numbers.length !== 0) {
      min1 = Math.min(...numbers)
      numbers.splice(numbers.indexOf(min1), 1)
  }
  if (numbers.length !== 0) {
      min2 = Math.min(...numbers)
      numbers.splice(numbers.indexOf(min2), 1)
  }

  return length > 2 ? Math.max(max1*max2, min1*min2): max1*max2;
}