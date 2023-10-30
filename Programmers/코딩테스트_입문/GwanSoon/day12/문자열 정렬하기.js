function solution(my_string) {
  var answer = [];
  for (let i = 0; i < my_string.length; i++) {
      const arr1 = Number(my_string[i]);
      if(Number.isNaN(arr1)) {
          continue;
      }
      answer.push(arr1)
  }
  
  return answer.sort((a,b) => a - b);
}