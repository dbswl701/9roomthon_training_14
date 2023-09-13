

function solution(numbers) {
  const answer = [];
  const check = Array(numbers.length).fill(0);

  const dfs = (cur) => {
      if (cur !== '') answer.push(cur);
      for(let i=0; i<numbers.length; i++) {
          if(check[i]===1) continue;
          check[i] = 1;
          dfs(cur + numbers[i]);
          check[i] = 0;
      }
  }
  
  dfs(''); // dfs를 통해 numbers의 모든 순열 answer에 넣기
      
  // 소수 찾기
  const isPrime = (num) => {
      if (num === 0 || num === 1) return false;
      for (let i = 2; i<num; i++) {
          if (num % i === 0) return false;
      }
      return true;
  }
  
  return [...new Set(answer.map(v => +v))].filter(v => isPrime(+v)).length;
}