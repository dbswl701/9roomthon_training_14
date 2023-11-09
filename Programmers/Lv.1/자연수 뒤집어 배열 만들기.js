function solution(n) {
    // n을 문자열로 변환
    const str = n.toString();
  
    // 문자열을 배열로 변환
    const arr = str.split("");
  
    // 배열을 뒤집음
    arr.reverse();
  
    // 배열의 각 요소를 정수로 변환
    const result = arr.map((n) => Number(n));
  
    // 결과를 반환
    return result;
  }

  