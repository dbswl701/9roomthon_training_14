function solution(my_string) {
  return my_string.split('').filter(v => !isNaN(v)).reduce((acc, cur) => acc + Number(cur), 0);
}