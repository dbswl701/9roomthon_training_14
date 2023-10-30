function solution(sides) {
  let triArr = sides.sort((a, b) => b - a);
      if (triArr[0] < triArr[1]+triArr[2]) {
          return 1
      } else {
          return 2
      }
}