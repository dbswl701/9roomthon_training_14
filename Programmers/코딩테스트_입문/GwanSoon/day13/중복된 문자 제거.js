function solution(my_string) {
  var answer = new Set([...my_string]);
  return [...answer].join('');
}