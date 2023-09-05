function solution(my_string) {
  return [...my_string].filter((v, idx) => my_string.indexOf(v) === idx).join('');
}