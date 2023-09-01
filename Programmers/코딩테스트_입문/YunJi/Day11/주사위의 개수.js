function solution(box, n) {
  return box.reduce((acc, cur) => acc * Math.floor(cur/n), 1);;
}