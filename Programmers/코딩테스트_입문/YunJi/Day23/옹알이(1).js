function solution(babbling) {
  return babbling.map(v => v.split(/aya|ye|woo|ma/).join('')).filter(v => v === '').length;
}