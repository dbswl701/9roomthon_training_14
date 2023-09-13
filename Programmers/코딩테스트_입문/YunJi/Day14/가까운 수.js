function solution(array, n) {
  let answer = 0;
  array.push(n);
  array.sort((a,b) => a-b);
  if (array.indexOf(n) === 0) answer = array[array.indexOf(n)+1];
  else if (array.indexOf(n) === array.length) answer = array[array.indexOf(n)-1];
  // 인덱스에서 +- 1 해서 차이 작은거 구하기
  else answer = Math.abs(array[array.indexOf(n)-1] - n) - Math.abs(array[array.indexOf(n)+1] - n) > 0 ? array[array.indexOf(n)+1] : array[array.indexOf(n)-1];
  return answer;
}