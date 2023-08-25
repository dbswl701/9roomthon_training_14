function solution(money) {
  const cnt = parseInt(money/5500)    
  return [cnt, money-cnt*5500];
}