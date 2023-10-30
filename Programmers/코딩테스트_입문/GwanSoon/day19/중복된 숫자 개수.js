function solution(array, n) {
  var answer = 0;
  for ( let i = 0; i < array.length; i++ ) {
      if ( n === array[i] )
          answer += 1;
  }
      
  return answer;
}