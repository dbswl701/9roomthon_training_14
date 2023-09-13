function solution(hp) {
  let answer = 0;
  answer += parseInt(hp / 5);
  hp %= 5;
  answer += parseInt(hp / 3);
  hp %= 3;
  answer += parseInt(hp / 1);
  return answer;
}