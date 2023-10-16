function solution(score) {
  const average = score.map(v => (v[0] + v[1]) / 2)
  const sorting = [...average].sort((a, b) => b-a);
  return average.map(v => sorting.indexOf(v) + 1);
}