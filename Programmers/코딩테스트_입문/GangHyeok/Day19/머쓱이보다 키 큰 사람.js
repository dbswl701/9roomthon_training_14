function solution(array, height) {
  var answer = 0;
  
  answer = array.filter(x => x>height);
  return answer.length;
}