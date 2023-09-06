function solution(order) {
  let answer = 0;
  [...String(order)].forEach(v => {
      if (v == 3 || v == 6 || v == 9) answer++;
  })
  return answer;
}