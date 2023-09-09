function solution(numbers, direction) {
  var answer = [];
  
  if(direction == 'right'){
      answer = (numbers.pop() + numbers.join('')).split('')
      answer = answer.map(a => parseInt(a));
  }
  else{
      let temp = numbers.shift();
      numbers[numbers.length] = temp;
      return numbers;
  }
  return answer;
}