function solution(sides) {
  sides.sort((a, b) => b - a)
  return sides[1] * 2 - 1;
}