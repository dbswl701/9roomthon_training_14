function solution(array) {
  var answer = 0;
  
  array = array.sort((a, b) => a-b)
  // js의 sort는 문자열로 인식한다는거 까먹고 헤맸다
  
  answer = array[parseInt(array.length/2)];
  
  return answer;
}