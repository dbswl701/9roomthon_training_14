function solution(my_string) {
  const arr1 = my_string.split(' ');
  let answer = Number(arr1[0]);
  for(let i = 1; i<arr1.length; i++ ) {
      if(arr1[i] === "+")
          answer += arr1[i+1] * 1;
      else if (arr1[i] === "-")
          answer -= arr1[i+1] * 1;
   else 
          continue;
  }
   
  return answer;
}