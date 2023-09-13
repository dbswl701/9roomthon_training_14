function solution(dots) {
  let width = 0, height = 0;
  
  for(dot of dots) {
      if (dots[0] === dot) continue;
      if (dots[0][0] === dot[0]) {
          height = Math.abs(dots[0][1] - dot[1]);
      } else if (dots[0][1] === dot[1]) {
          width = Math.abs(dots[0][0] - dot[0]);
      }
  }
  
  return height * width;
}