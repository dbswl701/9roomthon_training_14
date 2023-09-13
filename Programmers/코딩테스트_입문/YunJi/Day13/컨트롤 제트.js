function solution(s) {
  let stack = [];
  s.split(' ').forEach(target => {
      if (target === 'Z') stack.pop();
      else stack.push(+target);
  })
  return stack.reduce((acc, cur) => {return acc + cur}, 0);
}