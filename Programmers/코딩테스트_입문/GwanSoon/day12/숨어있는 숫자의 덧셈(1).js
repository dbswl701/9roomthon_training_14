function solution(my_string) {
  var answer = 0;
  for (let i = 0; i < my_string.length; i++) {
      const arr1 = my_string[i];
      if(Number.isNaN(Number(arr1))) {
          
          continue;
      }
     answer += Number(arr1); 
  }
  return answer;
}