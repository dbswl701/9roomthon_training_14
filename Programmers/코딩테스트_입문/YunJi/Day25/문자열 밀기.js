function solution(A, B) {
  let cnt = 0;
  const str = [...A];

  while(str.join('') !== B) {
      str.unshift(str.pop());
      cnt++;
      if (cnt === B.length) return -1;
  }

  return cnt;
}