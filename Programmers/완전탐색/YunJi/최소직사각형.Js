function solution(sizes) {
  // 명함 가로 세로 중 더 긴 것과 짧은 것 따로 분류하여 비교
  const maxArr = [];
  const minArr = [];
  
  sizes.forEach(v => {
      if (v[0] > v[1]) {
          maxArr.push(v[0]);
          minArr.push(v[1]);
      } else {
          maxArr.push(v[1]);
          minArr.push(v[0]);
      }
  });
  
  // 두 배열에서 가장 큰 값 각각 구해서 곱하기
  return Math.max(...maxArr) * Math.max(...minArr);
}