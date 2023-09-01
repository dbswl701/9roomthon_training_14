function solution(n) {
  //모든 소수 구하기
  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  
  // n이하의 소수 구하기
  const m = prime.filter(x => x<=n);
  
  //n이하의 수 중에서 소수와 1 제외시킨 개수 구하기
  return n-m.length-1;
}