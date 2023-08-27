function solution(my_string, letter) {
  var answer = ''; 
  let count = 0; // 카운팅하는 함수 하나
  while(count < my_string.length) { // count의 숫자가 my_string의 길이보다 작을 때
      if (my_string[count] !== letter ) { // my_string 문자열의 카운트가 레터랑 다름
          answer = answer + my_string[count] // 답에다가 다시 my_string[count]
      }
      count = count + 1 // 그리고 그 뒤에 다시 + 1을 더해서 count를 n+1로 만든다.
  }
  return answer;
}