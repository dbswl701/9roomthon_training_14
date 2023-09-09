function solution(n) {
  return Number(n.toString().split('').reduce((prev, curr) =>{
      return Number(prev)+Number(curr);
  }))
}