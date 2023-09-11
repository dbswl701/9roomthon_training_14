function solution(quiz) {
  const answer = [];
  quiz.map(v => {
      const [left, right] = v.split('=');
      if (eval(left) == right) answer.push('O');
      else answer.push('X');
  })
  return answer;
}