function solution(price) {
  if (price >= 500000) {
      return Math.floor(price * 0.80);  // 20% 할인
  } else if (price >= 300000) {
      return Math.floor(price * 0.90);  // 10% 할인
  } else if (price >= 100000) {
      return Math.floor(price * 0.95);  // 5% 할인
  } else {
      return price; // 기본 경우 처리
  }
}