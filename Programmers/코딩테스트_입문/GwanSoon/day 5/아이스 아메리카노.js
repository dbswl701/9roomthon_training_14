function solution(money) {
  var answer = [];
  let a = parseInt(money / 5500);
  let b = money % 5500
  return [a , b];
}