function solution(answers) {
  let supo1 = [1, 2, 3, 4, 5];
  let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let answer = new Array(3).fill(0)

  answers.forEach((x, idx, arr) => {
    if (arr[idx] == supo1[idx % supo1.length]) {
      answer[0]++;

    }

    if (arr[idx] == supo2[idx % supo2.length]) {
      answer[1]++;
    }

    if (arr[idx] == supo3[idx % supo3.length]) {
      answer[2]++;
    }
  })

  return answer.map((x, idx) => {
    if (x == Math.max(...answer)) {
      return idx + 1;
    } else {
      return 0;
    }
  }).filter(x => x != 0);


}