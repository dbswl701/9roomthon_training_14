function solution(polynomial) {
  let answer = '';
  let num = 0;
  let variable = 0;
  
  polynomial = polynomial.split(' + ')
  polynomial.map(v => {
      if(Number.isNaN(+v)) variable += v.split('x')[0] === "" ? 1 : parseInt(v.split('x')[0])
      else num += parseInt(v)
  })
  
  if (variable === 1) answer = 'x';
  else if (variable > 1) answer = `${variable}x`;
  if (variable !== 0 && num != 0) answer += ' + ';
  if (num !== 0) answer += num;
  
  return answer;
}