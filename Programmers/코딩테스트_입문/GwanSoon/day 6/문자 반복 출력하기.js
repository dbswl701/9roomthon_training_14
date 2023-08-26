function solution(my_string, n) {
  var answer = '';
  let count = 0;
      while(count < my_string.length) {
          const repeatC = my_string[count];
          
          let repeatCount = 0;
          while(repeatCount < n) {
              answer = answer + repeatC
              repeatCount = repeatCount + 1;
          }
          count = count + 1
      }
  return answer;
}