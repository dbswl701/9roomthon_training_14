function solution(my_string) {
  return my_string.split(/[a-z]/gi).reduce((prev, cur) => prev + +cur, 0);
}