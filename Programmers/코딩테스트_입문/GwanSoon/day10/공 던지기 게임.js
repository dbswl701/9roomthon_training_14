function solution(numbers, k) {
  let getBall = 1
  
  for(let i = 0 ; i < k-1 ; i ++) {
      getBall+=2
     
      if(getBall > numbers.length) {
          getBall-=numbers.length
      }
  }
  return getBall
}