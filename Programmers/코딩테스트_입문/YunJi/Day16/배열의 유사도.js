function solution(s1, s2) {
  const answer = [];
  const arr = s1.concat(s2);

  for (let i of arr) {
      if (arr.indexOf(i) !== arr.lastIndexOf(i)) answer.push(i)
  }
  return [...new Set(answer)].length;
}