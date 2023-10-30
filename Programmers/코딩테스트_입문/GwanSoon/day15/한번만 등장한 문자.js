function solution(s) {
  // 문자열을 배열로 변환하고 중복을 제거합니다.
  const uniqueChars = [...new Set(s.split(''))];

  // 등장 횟수가 1인 문자를 찾아 정렬합니다.
  const result = uniqueChars.filter(char => s.indexOf(char) === s.lastIndexOf(char)).sort().join('');

  return result;
}