function solution(array) {
  // sort()는 문자열의 유니코드 순서를 따르므로
  // number type의 오름차순 정렬을 원한다면 sort((a,b) => a-b)를 사용
  const new_arr = array.sort((a, b) => a-b)
  const len = parseInt(new_arr.length/2)
  answer = new_arr[len]
  return answer;
}
