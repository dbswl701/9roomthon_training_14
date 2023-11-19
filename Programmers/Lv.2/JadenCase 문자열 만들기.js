function solution(s) {
  return s.split('').map((v, idx) => {
      return s[idx-1] === ' ' || s[idx-1] === undefined ? v.toUpperCase() : v.toLowerCase();
  }).join('')
}