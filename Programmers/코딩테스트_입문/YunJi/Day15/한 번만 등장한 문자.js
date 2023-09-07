function solution(s) {
  const answer = [];
  const arr = {};
  [...new Set(s)].forEach(v => arr[v] = 0);
  [...s].forEach(v => arr[v]+=1);

  for (let i of Object.keys(arr)) {
      if (arr[i] === 1) answer.push(i);
  }
  
  return answer.sort().join('');
}