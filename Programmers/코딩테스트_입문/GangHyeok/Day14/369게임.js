function solution(order) {
  return String(order).split('').filter(x => ['3', '6', '9'].includes(x)).length
 }