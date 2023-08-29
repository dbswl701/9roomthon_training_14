function solution(numbers) {
  var answer = [];
  var n=numbers.length;
  
  for(var i=0;i<n;i++){
      answer[i] = numbers[i] * 2;
  }
  return answer;
}