function solution(my_string) {
  let answer = '';
  for (let i = 0; i < my_string.length; i++) {
      const arr1 = my_string[i];
      if (arr1 === 'a' ) {
              continue;
          }
      if (arr1 === 'e' ) {
              continue;
          }
      if (arr1 === 'i' ) {
              continue;
          }
      if (arr1 === 'o' ) {
              continue;
          }
      if (arr1 === 'u' ) {
              continue;
          }
      answer += arr1
          
  }
  return answer;
}


function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
} 