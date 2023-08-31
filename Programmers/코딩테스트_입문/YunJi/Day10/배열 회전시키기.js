function solution(numbers, direction) {
  var answer = [];
  if (direction === 'right') {
      answer = [ numbers.pop(), ...numbers ];
  } else {
      const num = numbers.shift()
      answer = [...numbers, num]
  }
  
  return answer;
}