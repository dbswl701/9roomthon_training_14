function solution(numbers) {
  const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
  for(let i = 0; i < num.length; i++){
      numbers = numbers.split(num[i]).join(i)
  }
  return Number(numbers)
}