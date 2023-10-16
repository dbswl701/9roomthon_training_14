function solution(spell, dic) {
  let answer = 2;
  let temp = 0;
  dic.forEach(v => {
      spell.forEach(s => {
          if (v.match(s)) temp++;
      })
      if (temp === spell.length) answer = 1;
      temp = 0;
  })
  return answer;
}