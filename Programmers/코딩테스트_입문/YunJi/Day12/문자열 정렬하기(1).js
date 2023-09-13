function solution(my_string) {
  const num_str = my_string.replace(/[^0-9]/g, '');
  
  return [...num_str].sort((a, b) => a - b).map(num => Number(num));
}