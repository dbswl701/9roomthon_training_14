function solution(s) {
  return s.split('').sort().filter(x=>s.indexOf(x)==s.lastIndexOf(x)).join('')
  
}