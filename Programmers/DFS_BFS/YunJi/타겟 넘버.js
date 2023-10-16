function solution(numbers, target) {
  let answer = 0;
  let sum = '';
  const bitMarsk = [];

  // + - 에 대해서 순열을 만든 다음(비트마스크),for 문을 돌면서 값 계산하고 target이랑 맞는지 비교

  for(let i = 0; i<2**numbers.length; i++) {
      bitMarsk.push([...i.toString(2).padStart(numbers.length, '0')])
  }
  
  const Sign = (el, n) => {
      if (el == 0) return '+' + n;
      else if (el == 1) return '-' + n;
  }
  
  bitMarsk.forEach(v => {
      for(let el in v) {
          sum += Sign(v[el], numbers[el])
      }
      // v.forEach((el, idx) => sum += Sign(el, numbers[idx]))
      if (eval(sum) == target) answer++;
      sum = '';
  })
  
  return answer;
}