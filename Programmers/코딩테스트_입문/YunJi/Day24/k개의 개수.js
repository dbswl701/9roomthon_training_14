function solution(i, j, k) {
  let answer = 0;
  for(let start = i; start<=j; start++) {
      const str = start.toString().split('');
      while(str.indexOf(k.toString())!==-1) {
          answer++;
          str.splice(str.indexOf(k.toString()), 1)
      }
  }
  return answer;
}