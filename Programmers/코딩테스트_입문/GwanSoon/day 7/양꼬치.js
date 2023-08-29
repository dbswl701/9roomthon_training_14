function solution(n, k) {
  let a = n * 12000; // 양꼬치 n을 a인분 먹은 값.
  let b = k * 2000 // 음료수 k를 b개 먹은 값
  let c = Math.floor(n / 10) * 2000; // 10개를 채워야지만 –2000원 되므로.
  return a + b - c;
}