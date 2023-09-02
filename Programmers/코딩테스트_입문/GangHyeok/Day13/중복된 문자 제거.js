function solution(my_string) {
  //집합으로 만들어서 중복제거시키고
  let answer = new Set(my_string.split(''));
  
  //다시 배열로 만든뒤에 join해서 문자열 반환
  return [...answer].join('');
}