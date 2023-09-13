function solution(array) {
  let answer = 0;
  const arr = [];
  array.map(v=>v+'').forEach(v => arr.push(...v.split('')))
  arr.forEach(v => { if(v.match(/7/g)) answer++; })
  return answer;
}