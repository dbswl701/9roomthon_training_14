function solution(price) {
  let answer = 0;
  let sale = 0;
  if (price >= 500000) {
      sale = 20
  } else if (price >= 300000) {
      sale = 10
  } else if (price >= 100000) {
      sale = 5
  }
  answer = price - ( price * sale / 100)
  // 소숫점 이하를 버린 정수 리턴
  return parseInt(answer);
}