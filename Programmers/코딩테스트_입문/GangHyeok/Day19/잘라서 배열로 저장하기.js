function solution(my_str, n) {
  let answer = [];
  let str = [...my_str];
  while(str.length != 0){
      answer.push(str.splice(0, n).join(''));
      console.log(str);
      console.log(answer);
  }
  return answer;
}