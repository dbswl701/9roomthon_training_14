function solution(array, height) {
  let answer = 0;
  array.forEach(v => {
      if (v > height) answer++;
  })
  return answer;
}