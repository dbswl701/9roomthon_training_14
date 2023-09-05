function solution(answers) {
  const  answer = [];
  
  const st1 = [1,2,3,4,5];
  const st2 = [2,1,2,3,2,4,2,5];
  const st3 = [3,3,1,1,2,2,4,4,5,5];

  const match = [0, 0, 0];
  answers.forEach((v, idx) => {
      if (st1[idx%st1.length] === v) match[0]++;
      if (st2[idx%st2.length] === v) match[1]++;
      if (st3[idx%st3.length] === v) match[2]++;
  })
  match.map((v, idx, arr) => {
      if (v === Math.max(...arr)) return answer.push(idx+1);
  });

  return answer;
}