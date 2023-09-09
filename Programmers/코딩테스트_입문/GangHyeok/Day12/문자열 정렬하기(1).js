function solution(my_string) {
  return my_string.split('').filter(x => [0, 1, 2, 3, 4, 5, 6, 7, 8,9].includes(parseInt(x))).map(x=>parseInt(x)).sort((a,b) =>a-b);
    console.log(answer);
    
    
}