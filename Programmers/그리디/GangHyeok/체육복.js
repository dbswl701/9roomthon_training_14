function solution(n, lost, reserve) {
  var answer = n - lost.length;
  lost.sort((a, b) => a - b).forEach((x, idx, arr) => {
    if (reserve.includes(x)) {
      answer++;
      reserve[reserve.indexOf(x)] = -1;
      lost[idx] = -1;
    }
  })

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      answer++;
      reserve[reserve.indexOf(lost[i] - 1)] = -1;
      console.log(lost[i], reserve);
    }
    else if (reserve.includes(lost[i] + 1)) {
      answer++;
      reserve[reserve.indexOf(lost[i] + 1)] = -1;
      console.log(lost[i], reserve);
    }
  }

  return answer;
}