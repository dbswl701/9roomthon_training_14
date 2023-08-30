function solution(numbers) {
  numbers.sort((a, b)=>a-b)
  
  return numbers.pop()*numbers.pop();
}