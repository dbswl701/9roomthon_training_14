function solution(polynomial) {
  const terms = polynomial.split(' + ');

  let xCoefficient = 0;
  let constant = 0;

  for (let i = 0; i < terms.length; i++) {
    const term = terms[i];
    if (term.includes('x')) {
      const parts = term.split('x');
      if (parts[0].trim() === '') {
        xCoefficient += 1;
      } else {
        xCoefficient += parseInt(parts[0].trim());
      }
    } else {
      constant += parseInt(term);
    }
  }

  let result = '';

  if (xCoefficient !== 0) {
    result += xCoefficient === 1 ? 'x' : xCoefficient + 'x';
  }

  if (constant !== 0) {
    if (xCoefficient !== 0) {
      result += ' + ' + constant;
    } else {
      result += constant;
    }
  }

  return result;
}