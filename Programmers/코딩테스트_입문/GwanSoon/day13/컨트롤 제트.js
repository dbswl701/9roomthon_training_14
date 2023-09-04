function solution(s) {
  const stack = [];

  for (const num of s.split(" ")) {
      if (num === "Z") {
          stack.pop();
      } else {
          stack.push(+num)
      }
  }
  return stack.reduce((a,b) => a + b, 0);
}