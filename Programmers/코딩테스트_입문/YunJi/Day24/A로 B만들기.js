function solution(before, after) {
  const arr = [...before];

  // [...after] -> 이렇게는 안되더라
  after.split('').forEach(v => {
      if (arr.indexOf(v) !== -1) arr.splice(arr.indexOf(v), 1)
  })

  return arr.length ? 0 : 1;
}