function solution(my_string) {
  var answer = '';
  let count = my_string.length -1;
  while(count >= 0) {
      answer += my_string[count]
      count = count - 1;
  }
  return answer;
}