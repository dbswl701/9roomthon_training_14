function solution(emergency) {
  let answer = Array(emergency.length).fill(1)
  
  for (let i = 0; i < emergency.length; i++) {
      for (let j = 0; j <= i; j++) {
          console.log(i, j);
          if (emergency[i] < emergency[j]) { // 만약 뒤에 들어오는게 더 크다면 = 순서가 우선이라면
              answer[i] += 1;
          } else if (emergency[i] > emergency[j]) {
              answer[j] += 1;
          }
      }
  }
  return answer;
}
