function solution(n) {
  var answer = 0;
  let pizzaCount = 1
  while(true) {
      if(pizzaCount * 6 % n === 0) {
          return pizzaCount;
      }
      pizzaCount = pizzaCount + 1
  }
  return answer;
}