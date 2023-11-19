function solution(numbers) {
  if(numbers.reduce((acc, cur) => acc+cur,0) === 0) return '0';
  return numbers.map(v => v+'').sort((a, b) => {
      return (b+a) - (a+b);
  }).join('');
}