function solution(begin, target, words) {
  const queue = [{ str: begin, distance: 0 }];
  const visited = [];

  while (queue.length) {
      const { str, distance } = queue.shift();
      visited.push(str);
      if (str === target) return distance;
      for (const word of words) {
          if (!visited.includes(word) && isOneCharDifferent(str, word)) {
              queue.push({ str: word, distance: distance + 1 });
          }
      }
  }
  return 0;
}

function isOneCharDifferent(str1, str2) {
  let diffCount = 0;

  for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
          diffCount++;
          if (diffCount > 1) return false;
      }
  }

  return diffCount === 1;
}